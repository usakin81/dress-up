from flask import Flask, render_template, jsonify, request, send_file
import random
import json
import os
from datetime import datetime, timedelta
from PIL import Image
import io

app = Flask(__name__)

CONFIG_FILE = 'static/data/config.py'
DATA_STORAGE = 'data/user_data.json'

def load_config():
    """加载配置文件"""
    config = {
        'HIDDEN_PROBABILITY': 0.05,
        'INITIAL_DRAWS': 10,
        'DAILY_REWARD': 5,
        'backgrounds': [],
        'categories': {
            'left': [],
            'right': []
        },
        'clothes': {}
    }
    
    try:
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            exec(f.read(), {}, config)
    except FileNotFoundError:
        print(f"配置文件 {CONFIG_FILE} 未找到，使用默认配置")
    
    return config

@app.route('/')
def index():
    config = load_config()
    return render_template('index.html', config=config)

@app.route('/api/save_image', methods=['POST'])
def save_image():
    try:
        data = request.json
        image_data = data.get('image')
        
        if not image_data:
            return jsonify({'success': False, 'message': '图片数据缺失'})
        
        import base64
        header, encoded = image_data.split(',', 1)
        image_bytes = base64.b64decode(encoded)
        
        img = Image.open(io.BytesIO(image_bytes))
        
        output = io.BytesIO()
        img.save(output, format='PNG')
        output.seek(0)
        
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        filename = f'blindbox_outfit_{timestamp}.png'
        
        return send_file(output, mimetype='image/png', as_attachment=True, download_name=filename)
    
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
