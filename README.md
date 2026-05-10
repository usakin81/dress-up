# 小白的换装盲盒（Python网页版）

基于Python Flask框架开发的网页版换装盲盒游戏，具有盲盒抽取、隐藏款机制、音频效果等功能。

## 项目结构

```
web_version/
├── app.py                      # Flask后端主程序
├── requirements.txt            # Python依赖包
├── README.md                  # 项目说明文档
├── templates/
│   └── index.html            # 前端HTML页面
├── static/
│   ├── css/
│   │   └── style.css        # 样式文件
│   ├── js/
│   │   └── script.js        # 前端交互逻辑和游戏数据
│   ├── audio/               # 音频文件
│   │   ├── background.mp3   # 背景音乐
│   │   ├── camera.wav       # 保存图片音效
│   │   ├── normal.wav       # 普通款音效
│   │   └── rare.wav         # 隐藏款音效
│   └── images/
│       ├── characters/       # 人物素材
│       │   └── base.png     # 基础人物形象
│       ├── clothes/         # 衣物素材
│       ├── backgrounds/      # 背景素材
│       │   ├── bg_livingroom.png # 新中式客厅背景
│       │   ├── bg_bedroom.png    # 公主卧室背景
│       │   └── bg_stage.png      # 晚会舞台背景
│       └── icons/           # 图标素材
│           ├── aries.png     # 白羊座图标
│           ├── official-account.png # 公众号图标
│           ├── settings.png  # 设置图标
│           └── QR.jpg        # 公众号二维码
└── data/
    └── user_data.json       # 用户数据（自动生成）
```

***

## 📌 图片素材清单

### 1️⃣ 人物素材

**目录：** `static/images/characters/`

| 文件名        | 说明               | 格式要求                   |
| ---------- | ---------------- | ---------------------- |
| `base.png` | 基础人物形象（正面站立，无衣物） | PNG透明背景，推荐尺寸：1536×2730px |

### 2️⃣ 背景素材

**目录：** `static/images/backgrounds/`

| 文件名                 | 说明       | 格式要求                     |
| ------------------- | -------- | ------------------------ |
| `bg_livingroom.png` | 新中式客厅背景  | PNG，推荐尺寸：1920×1080px |
| `bg_bedroom.png`    | 公主卧室背景   | PNG，推荐尺寸：1920×1080px |
| `bg_stage.png`      | 晚会舞台背景 | PNG，推荐尺寸：1920×1080px |

### 3️⃣ 衣物素材

**目录：** `static/images/clothes/`

#### 左侧分类

| 分类 | 文件名                                                                 | 说明           | 层级          |
| -- | --------------------------------------------------------------------- | ------------ | ----------- |
| 帽子 | `hat_black.png` `hat_brown.png` `hat_gray.png` `hat_red.png` `hat_bucket1.png` `hat_bucket2.png` `hat_new.png` `hat_headband.png`(隐藏款) | 7款常规 + 1款隐藏款 | z-index: 11 |
| 口罩 | `mask_blue.png` `mask_white.png` `mask_black.png` `mask_gray.png` `mask_smile.png`(隐藏款) | 4款常规 + 1款隐藏款 | z-index: 10 |
| 上衣 | `top_black.png` `top_white.png` `top_pink.png` `top_smile.png` `top_turtleneck.png` `top_man.png` `top_lace.png`(隐藏款) | 6款常规 + 1款隐藏款 | z-index: 6  |
| 外套 | `coat_cardigan.png` `coat_denim.png` `coat_leather.png` `coat_plaid.png` `coat_stripe.png` `coat_trench.png` `coat_new.png`(隐藏款) | 6款常规 + 1款隐藏款 | z-index: 8  |

#### 右侧分类

| 分类  | 文件名                                                                 | 说明           | 层级         |
| --- | --------------------------------------------------------------------- | ------------ | ---------- |
| 项链  | `necklace_choker.png` `necklace_chopard.png` `necklace_gold.png` `necklace_panda.png` `necklace_feather.png`(隐藏款) | 4款常规 + 1款隐藏款 | z-index: 7 |
| 眼镜  | `glass_black.png` `glass_gold.png` `glass_sun.png` `glass_orange.png` `glass_line.png`(隐藏款) | 4款常规 + 1款隐藏款 | z-index: 9 |
| 裤子  | `pants_jeans.png` `pants_suit.png` `pants_wide.png` `pants_short.png` `pants_down.png` `pants_pooh.png`(隐藏款) | 5款常规 + 1款隐藏款 | z-index: 3 |
| 鞋子  | `boots_chelsea.png` `boots_hiking.png` `boots_leather.png` `boots_slippers.png` `boots_sneakers.png` `boots_crocs.png`(隐藏款) | 5款常规 + 1款隐藏款 | z-index: 2 |

**衣物素材要求：**

- 格式：PNG透明背景
- 尺寸：与人物匹配（推荐尺寸：1536×2730px）
- 风格：统一平面插画风格
- 层级关系：鞋子 < 裤子 < 上衣 < 项链 < 外套 < 眼镜 < 口罩 < 帽子

### 4️⃣ 音频素材

**目录：** `static/audio/`

| 文件名           | 说明       | 格式要求 |
| ------------- | -------- | ---- |
| `background.mp3` | 背景音乐    | MP3  |
| `camera.wav`   | 保存图片音效  | WAV  |
| `normal.wav`   | 普通款音效   | WAV  |
| `rare.wav`     | 隐藏款音效   | WAV  |

### 5️⃣ 图标素材

**目录：** `static/images/icons/`

| 文件名                 | 说明       | 格式要求 |
| ------------------- | -------- | ---- |
| `aries.png`          | 白羊座图标   | PNG  |
| `official-account.png` | 公众号图标   | PNG  |
| `settings.png`       | 设置图标    | PNG  |
| `QR.jpg`            | 公众号二维码  | JPG  |

***

## 安装与运行

### 1. 安装Python依赖

```bash
cd web_version
pip install -r requirements.txt
```

### 2. 准备素材

按照上面的清单，将图片和音频素材放入对应目录。

### 3. 运行游戏

```bash
python app.py
```

### 4. 访问游戏

打开浏览器访问：`http://localhost:5001`

***

## 核心功能

✅ **盲盒抽取** - 点击分类按钮随机抽取衣物\
✅ **隐藏款机制** - 5%概率抽中隐藏款，带特效和音效\
✅ **音频效果** - 背景音乐和音效\
✅ **次数管理** - 初始80次，每日登录+20次，月末清零\
✅ **背景切换** - 3种背景可选\
✅ **部位重置** - 可选择重置特定部位\
✅ **图片保存** - 保存换装成果为PNG图片，背景与游戏界面一致\
✅ **人物拖拽** - 可按住鼠标拖拽人物位置\
✅ **设置功能** - 音频开关和游戏玩法说明\
✅ **响应式设计** - 支持PC和移动端

***

## 配置说明

编辑 `static/js/script.js` 可调整：

- `HIDDEN_PROBABILITY` - 隐藏款概率（默认0.05）
- `categories` - 分类列表
- `backgrounds` - 背景列表
- `clothes` - 衣物详细配置
- 次数管理规则（初始次数、每日奖励次数等）

***

## 游戏玩法

1. **抽取衣物** - 点击左右两侧的衣物分类，随机抽取一件衣物自动穿上，有 5% 概率抽到隐藏款
2. **重置衣物** - 不满意可点击重置按钮，取消穿着该分类衣物
3. **拖拽人物** - 可按住鼠标拖拽人物位置
4. **保存图片** - 满意后可以保存图片
5. **切换背景** - 点击换背景按钮，选择喜欢的背景
6. **音频控制** - 点击设置图标，可开启/关闭背景音乐和音效

***

## 注意事项

⚠️ 如果没有提供图片素材，游戏会使用彩色占位符显示，功能仍然可用。
⚠️ 音频文件加载可能会被浏览器阻止，需要用户交互后才能播放。
