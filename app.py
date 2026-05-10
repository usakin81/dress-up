from flask import Flask, render_template, jsonify, request, send_file
import random
import json
import os
from datetime import datetime, timedelta
from PIL import Image
import io

app = Flask(__name__)

DATA_STORAGE = 'data/user_data.json'

@app.route('/')
def index():
    return render_template('index.html')

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
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=False, host='0.0.0.0', port=port)