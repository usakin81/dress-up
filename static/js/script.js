const gameData = {
    categories: {
        left: [
            { id: 'hat', name: '帽子' },
            { id: 'mask', name: '口罩' },
            { id: 'top', name: '上衣' },
            { id: 'coat', name: '外套' }
        ],
        right: [
            { id: 'necklace', name: '项链' },
            { id: 'glasses', name: '眼镜' },
            { id: 'pants', name: '裤子' },
            { id: 'boots', name: '鞋子' }
        ]
    },
    backgrounds: [
        { id: 'livingroom', name: '新中式客厅', image: 'bg_livingroom.png', color: '#E8D5C4' },
        { id: 'bedroom', name: '公主卧室', image: 'bg_bedroom.png', color: '#F0E6D2' },
        { id: 'stage', name: '晚会舞台', image: 'bg_stage.png', color: '#D4C4B0' }
    ],
    clothes: {
        hat: [
            { id: 'hat1', name: '黑色帽子', is_hidden: false, image: 'hat_black.png', z_index: 11 },
            { id: 'hat2', name: '咖啡帽子', is_hidden: false, image: 'hat_brown.png', z_index: 11 },
            { id: 'hat3', name: '灰色帽子', is_hidden: false, image: 'hat_gray.png', z_index: 11 },
            { id: 'hat4', name: '红色帽子', is_hidden: false, image: 'hat_red.png', z_index: 11 },
            { id: 'hat5', name: '黑渔夫帽', is_hidden: false, image: 'hat_bucket1.png', z_index: 11 },
            { id: 'hat6', name: '蓝渔夫帽', is_hidden: false, image: 'hat_bucket2.png', z_index: 11 },
            { id: 'hat7', name: '彩色头巾', is_hidden: true, image: 'hat_headband.png', z_index: 11 },
            { id: 'hat8', name: '新款帽子', is_hidden: false, image: 'hat_new.png', z_index: 11 }
        ],
        mask: [
            { id: 'mask1', name: '蓝色口罩', is_hidden: false, image: 'mask_blue.png', z_index: 10 },
            { id: 'mask2', name: '白色口罩', is_hidden: false, image: 'mask_white.png', z_index: 10 },
            { id: 'mask3', name: '黑色口罩', is_hidden: false, image: 'mask_black.png', z_index: 10 },
            { id: 'mask4', name: '灰色口罩', is_hidden: false, image: 'mask_gray.png', z_index: 10 },
            { id: 'mask5', name: '笑脸口罩', is_hidden: true, image: 'mask_smile.png', z_index: 10 }
        ],
        top: [
            { id: 'top1', name: '黑色T恤', is_hidden: false, image: 'top_black.png', z_index: 6 },
            { id: 'top2', name: '蕾丝内衣', is_hidden: true, image: 'top_lace.png', z_index: 6 },
            { id: 'top3', name: '白色T恤', is_hidden: false, image: 'top_white.png', z_index: 6 },
            { id: 'top4', name: '粉色毛衣', is_hidden: false, image: 'top_pink.png', z_index: 6 },
            { id: 'top5', name: '笑脸T恤', is_hidden: false, image: 'top_smile.png', z_index: 6 },
            { id: 'top6', name: '高领毛衣', is_hidden: false, image: 'top_turtleneck.png', z_index: 6 },
            { id: 'top7', name: '男士T恤', is_hidden: false, image: 'top_man.png', z_index: 6 }
        ],
        coat: [
            { id: 'coat1', name: '黄色外套', is_hidden: false, image: 'coat_cardigan.png', z_index: 8 },
            { id: 'coat2', name: '牛仔外套', is_hidden: false, image: 'coat_denim.png', z_index: 8 },
            { id: 'coat3', name: '黑色皮衣', is_hidden: false, image: 'coat_leather.png', z_index: 8 },
            { id: 'coat4', name: '新款外套', is_hidden: true, image: 'coat_new.png', z_index: 8 },
            { id: 'coat5', name: '格子衬衫', is_hidden: false, image: 'coat_plaid.png', z_index: 8 },
            { id: 'coat6', name: '条纹外套', is_hidden: false, image: 'coat_stripe.png', z_index: 8 },
            { id: 'coat7', name: '风衣', is_hidden: false, image: 'coat_trench.png', z_index: 8 }
        ],
        necklace: [
            { id: 'necklace1', name: '锁骨链', is_hidden: false, image: 'necklace_choker.png', z_index: 7 },
            { id: 'necklace2', name: '萧邦项链', is_hidden: false, image: 'necklace_chopard.png', z_index: 7 },
            { id: 'necklace3', name: '金色项链', is_hidden: false, image: 'necklace_gold.png', z_index: 7 },
            { id: 'necklace4', name: '熊猫项链', is_hidden: false, image: 'necklace_panda.png', z_index: 7 },
            { id: 'necklace5', name: '羽毛项链', is_hidden: true, image: 'necklace_feather.png', z_index: 7 }
        ],
        glasses: [
            { id: 'glasses1', name: '黑框眼镜', is_hidden: false, image: 'glass_black.png', z_index: 9 },
            { id: 'glasses2', name: '金边眼镜', is_hidden: false, image: 'glass_gold.png', z_index: 9 },
            { id: 'glasses3', name: '黑色墨镜', is_hidden: false, image: 'glass_sun.png', z_index: 9 },
            { id: 'glasses4', name: '浅色墨镜', is_hidden: false, image: 'glass_orange.png', z_index: 9 },
            { id: 'glasses5', name: '眼镜绳', is_hidden: true, image: 'glass_line.png', z_index: 9 }
        ],
        pants: [
            { id: 'pants1', name: '牛仔裤', is_hidden: false, image: 'pants_jeans.png', z_index: 3 },
            { id: 'pants2', name: '西裤', is_hidden: false, image: 'pants_suit.png', z_index: 3 },
            { id: 'pants3', name: '阔腿裤', is_hidden: false, image: 'pants_wide.png', z_index: 3 },
            { id: 'pants4', name: '短裤', is_hidden: false, image: 'pants_short.png', z_index: 3 },
            { id: 'pants5', name: '羽绒裤', is_hidden: false, image: 'pants_down.png', z_index: 3 },
            { id: 'pants6', name: '睡裤', is_hidden: true, image: 'pants_pooh.png', z_index: 3 }
        ],
        boots: [
            { id: 'boots1', name: '切尔西靴', is_hidden: false, image: 'boots_chelsea.png', z_index: 2 },
            { id: 'boots2', name: '运动鞋', is_hidden: false, image: 'boots_hiking.png', z_index: 2 },
            { id: 'boots3', name: '皮鞋', is_hidden: false, image: 'boots_leather.png', z_index: 2 },
            { id: 'boots4', name: '拖鞋', is_hidden: false, image: 'boots_slippers.png', z_index: 2 },
            { id: 'boots5', name: '板鞋', is_hidden: false, image: 'boots_sneakers.png', z_index: 2 },
            { id: 'boots6', name: '洞洞鞋', is_hidden: true, image: 'boots_crocs.png', z_index: 2 }
        ]
    },
    HIDDEN_PROBABILITY: 0.05
};

let gameState = {
    wornClothes: {},
    currentBackground: null,
    drawCount: 50,
    isAnimating: false,
    selectedResetItems: []
};

document.addEventListener('DOMContentLoaded', function() {
    initGame();
    initDragAndDrop();
    initAudio();
});

function initDragAndDrop() {
    const character = document.getElementById('character');
    let isDragging = false;
    let startX, startY, offsetX, offsetY;
    
    character.addEventListener('mousedown', function(e) {
        isDragging = true;
        character.classList.add('dragging');
        
        const rect = character.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        offsetX = startX - rect.left;
        offsetY = startY - rect.top;
        
        // 保存当前的transform样式
        const currentTransform = character.style.transform;
        
        // 只有在拖动时才清除transform样式
        if (!currentTransform || currentTransform === 'translate(-50%, -50%)') {
            character.style.transform = 'none';
        }
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const characterArea = document.getElementById('characterArea');
        const areaRect = characterArea.getBoundingClientRect();
        
        let newX = e.clientX - offsetX - areaRect.left;
        let newY = e.clientY - offsetY - areaRect.top;
        
        const characterRect = character.getBoundingClientRect();
        
        newX = Math.max(0, Math.min(newX, areaRect.width - characterRect.width));
        newY = Math.max(0, Math.min(newY, areaRect.height - characterRect.height));
        
        character.style.left = newX + 'px';
        character.style.top = newY + 'px';
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            character.classList.remove('dragging');
        }
    });
    
    document.addEventListener('mouseleave', function() {
        if (isDragging) {
            isDragging = false;
            character.classList.remove('dragging');
        }
    });
}

function initGame() {
    gameState.currentBackground = gameData.backgrounds[0];
    updateBackground();
    renderButtons();
    renderBackgroundList();
    renderResetList();
    checkFirstLaunch();
    
    // 检查并处理每月清零逻辑
    checkMonthlyReset();
    
    // 检查是否是新用户
    const hasSetInitialCount = localStorage.getItem('hasSetInitialCount');
    if (!hasSetInitialCount) {
        gameState.drawCount = 80;
        localStorage.setItem('drawCount', gameState.drawCount);
        localStorage.setItem('hasSetInitialCount', 'true');
    } else {
        const savedDrawCount = localStorage.getItem('drawCount');
        if (savedDrawCount !== null) {
            gameState.drawCount = parseInt(savedDrawCount);
        }
    }
    
    // 检查每日登录奖励
    const lastDate = localStorage.getItem('lastLoginDate');
    const today = new Date().toDateString();
    if (lastDate !== today) {
        gameState.drawCount += 20;
        localStorage.setItem('lastLoginDate', today);
        showToast('每日登录奖励：+20次！');
    }
    
    updateDrawCount();
}

function checkFirstLaunch() {
    const hasLaunched = localStorage.getItem('hasLaunched');
    if (!hasLaunched) {
        document.getElementById('guidePanel').classList.add('show');
        localStorage.setItem('hasLaunched', 'true');
    }
}

function checkMonthlyReset() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // 检查是否是新的月份的第一天
    if (now.getDate() === 1) {
        const lastResetMonth = localStorage.getItem('lastResetMonth');
        const resetKey = `${currentYear}-${currentMonth}`;
        
        // 如果本月还没重置过
        if (lastResetMonth !== resetKey) {
            // 设置初始次数为80
            localStorage.setItem('drawCount', 80);
            localStorage.setItem('lastResetMonth', resetKey);
        }
    }
}

function renderButtons() {
    const leftContainer = document.getElementById('buttonsLeft');
    const rightContainer = document.getElementById('buttonsRight');
    
    leftContainer.innerHTML = '';
    rightContainer.innerHTML = '';
    
    gameData.categories.left.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.textContent = category.name;
        button.onclick = () => drawCloth(category.id);
        leftContainer.appendChild(button);
    });
    
    gameData.categories.right.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.textContent = category.name;
        button.onclick = () => drawCloth(category.id);
        rightContainer.appendChild(button);
    });
}

function drawCloth(category) {
    if (gameState.isAnimating) return;
    if (gameState.drawCount <= 0) {
        showToast('今日次数已用完！');
        return;
    }
    
    const clothes = gameData.clothes[category];
    if (!clothes || clothes.length === 0) return;
    
    const normalItems = clothes.filter(c => !c.is_hidden);
    const hiddenItem = clothes.find(c => c.is_hidden);
    
    let selectedCloth;
    if (Math.random() < gameData.HIDDEN_PROBABILITY && hiddenItem) {
        selectedCloth = hiddenItem;
    } else {
        selectedCloth = normalItems[Math.floor(Math.random() * normalItems.length)];
    }
    
    gameState.drawCount--;
    localStorage.setItem('drawCount', gameState.drawCount);
    updateDrawCount();
    
    // 直接换装，去掉抽取中动画
    gameState.wornClothes[category] = selectedCloth;
    renderClothes();
    
    if (selectedCloth.is_hidden) {
        playSound('rareSound');
        showHiddenEffect(selectedCloth.name);
    } else {
        playSound('normalSound');
        playSatisfiedAnimation();
    }
}

function showGiftBox() {
    const giftBox = document.getElementById('giftBox');
    giftBox.classList.add('show');
}

function hideGiftBox() {
    const giftBox = document.getElementById('giftBox');
    giftBox.classList.remove('show');
}

function renderClothes() {
    const layer = document.getElementById('clothingLayer');
    layer.innerHTML = '';
    
    const sorted = Object.values(gameState.wornClothes).sort((a, b) => a.z_index - b.z_index);
    
    sorted.forEach(cloth => {
        const item = document.createElement('div');
        item.className = `clothing-item ${cloth.is_hidden ? 'hidden-item' : ''}`;
        item.style.zIndex = cloth.z_index;
        item.style.width = '100%';
        item.style.height = '100%';
        item.style.top = '0';
        item.style.left = '0';
        
        const img = document.createElement('img');
        img.src = `/static/images/clothes/${cloth.image}`;
        img.alt = cloth.name;
        img.onerror = function() {
            console.log('图片加载失败:', cloth.image);
            item.style.backgroundColor = getRandomColor();
        };
        img.onload = function() {
            console.log('图片加载成功:', cloth.image);
        };
        
        item.appendChild(img);
        layer.appendChild(item);
    });
}

function getRandomColor() {
    const colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#E6E6FA'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function playSatisfiedAnimation() {
    gameState.isAnimating = true;
    const character = document.getElementById('character');
    
    // 保存当前位置状态
    const currentLeft = character.style.left;
    const currentTop = character.style.top;
    const isDragged = currentLeft || currentTop;
    
    if (isDragged) {
        // 如果人物被拖动过，使用不改变位置的动画
        character.style.animation = 'satisfied-dragged 4s ease-in-out';
    } else {
        // 否则使用默认的居中动画
        character.classList.add('satisfied');
    }
    
    setTimeout(() => {
        character.classList.remove('satisfied');
        character.style.animation = '';
        // 恢复之前的位置状态
        if (isDragged) {
            // 如果人物被拖动过，保持当前位置
            character.style.transform = 'none';
            character.style.left = currentLeft;
            character.style.top = currentTop;
        } else {
            // 否则清除内联样式，让CSS默认样式生效
            character.style.transform = '';
            character.style.left = '';
            character.style.top = '';
        }
        gameState.isAnimating = false;
    }, 2000);
}

function showHiddenEffect(clothName) {
    gameState.isAnimating = true;
    
    // 保存人物当前位置状态
    const character = document.getElementById('character');
    const currentLeft = character.style.left;
    const currentTop = character.style.top;
    
    document.getElementById('hiddenText').textContent = `恭喜抽中「${clothName}」！`;
    document.getElementById('hiddenPopup').classList.add('show');
    
    createConfetti();
    
    setTimeout(() => {
        document.getElementById('hiddenPopup').classList.remove('show');
        playSatisfiedAnimation();
    }, 3000);
}

function createConfetti() {
    const container = document.getElementById('confetti');
    container.innerHTML = '';
    
    const colors = ['#FF69B4', '#FFD700', '#00CED1', '#FF6347', '#9370DB'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(confetti);
    }
}

function updateDrawCount() {
    const countEl = document.getElementById('drawCount');
    countEl.textContent = gameState.drawCount;
    countEl.style.transform = 'scale(1.3)';
    setTimeout(() => {
        countEl.style.transform = 'scale(1)';
    }, 200);
}

function updateBackground() {
    const container = document.getElementById('container');
    const bg = gameState.currentBackground;
    container.style.backgroundImage = `url('/static/images/backgrounds/${bg.image}')`;
}

function renderBackgroundList() {
    const list = document.getElementById('bgList');
    list.innerHTML = '';
    
    gameData.backgrounds.forEach(bg => {
        const item = document.createElement('div');
        item.className = `bg-item ${bg.id === gameState.currentBackground.id ? 'active' : ''}`;
        item.style.backgroundColor = bg.color;
        item.style.backgroundImage = `url('/static/images/backgrounds/${bg.image}')`;
        item.textContent = bg.name;
        item.onclick = () => changeBackground(bg);
        list.appendChild(item);
    });
}

function changeBackground(bg) {
    gameState.currentBackground = bg;
    updateBackground();
    renderBackgroundList();
    closeAllPanels();
}

function renderResetList() {
    const list = document.getElementById('resetList');
    list.innerHTML = '';
    
    const allCategories = [...gameData.categories.left, ...gameData.categories.right];
    
    allCategories.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'reset-item';
        item.textContent = cat.name;
        item.dataset.id = cat.id;
        item.onclick = () => toggleResetItem(cat.id, item);
        list.appendChild(item);
    });
}

function toggleResetItem(categoryId, item) {
    const index = gameState.selectedResetItems.indexOf(categoryId);
    if (index > -1) {
        gameState.selectedResetItems.splice(index, 1);
        item.classList.remove('selected');
    } else {
        gameState.selectedResetItems.push(categoryId);
        item.classList.add('selected');
    }
}

function confirmReset() {
    gameState.selectedResetItems.forEach(category => {
        delete gameState.wornClothes[category];
    });
    renderClothes();
    closeAllPanels();
    gameState.selectedResetItems = [];
}

function saveImage() {
    playSound('cameraSound');
    const canvas = document.getElementById('saveCanvas');
    const ctx = canvas.getContext('2d');
    const characterArea = document.getElementById('characterArea');
    const character = document.getElementById('character');
    const clothingLayer = document.getElementById('clothingLayer');
    
    // 设置画布尺寸
    canvas.width = characterArea.offsetWidth;
    canvas.height = characterArea.offsetHeight;
    
    // 绘制背景
    const bgImage = new Image();
    bgImage.src = document.getElementById('container').style.backgroundImage.replace(/url\(['"]?([^'"]*)['"]?\)/, '$1');
    bgImage.onload = function() {
        // 计算背景图片的显示比例，模拟CSS background-size: cover
        const canvasRatio = canvas.width / canvas.height;
        const imageRatio = bgImage.width / bgImage.height;
        let drawWidth, drawHeight, drawX, drawY;
        
        if (canvasRatio > imageRatio) {
            // 画布更宽，以高度为基准
            drawHeight = canvas.height;
            drawWidth = drawHeight * imageRatio;
            drawX = (canvas.width - drawWidth) / 2;
            drawY = 0;
        } else {
            // 画布更高，以宽度为基准
            drawWidth = canvas.width;
            drawHeight = drawWidth / imageRatio;
            drawX = 0;
            drawY = (canvas.height - drawHeight) / 2;
        }
        
        // 绘制背景图片，保持与游戏界面一致的显示方式
        ctx.drawImage(bgImage, drawX, drawY, drawWidth, drawHeight);
        
        // 绘制人物
        const charImage = new Image();
        charImage.src = character.querySelector('img').src;
        charImage.onload = function() {
            const charRect = character.getBoundingClientRect();
            const areaRect = characterArea.getBoundingClientRect();
            const charX = charRect.left - areaRect.left;
            const charY = charRect.top - areaRect.top;
            ctx.drawImage(charImage, charX, charY, charRect.width, charRect.height);
            
            // 绘制衣物
            const clothingItems = clothingLayer.querySelectorAll('.clothing-item');
            let itemsLoaded = 0;
            
            clothingItems.forEach(item => {
                const img = item.querySelector('img');
                if (img && img.src) {
                    const clothImage = new Image();
                    clothImage.src = img.src;
                    clothImage.onload = function() {
                        const itemRect = item.getBoundingClientRect();
                        const clothX = itemRect.left - areaRect.left;
                        const clothY = itemRect.top - areaRect.top;
                        ctx.drawImage(clothImage, clothX, clothY, itemRect.width, itemRect.height);
                        itemsLoaded++;
                        if (itemsLoaded === clothingItems.length) {
                            // 所有图片加载完成后保存
                            saveCanvasAsImage(canvas);
                        }
                    };
                } else {
                    itemsLoaded++;
                    if (itemsLoaded === clothingItems.length) {
                        saveCanvasAsImage(canvas);
                    }
                }
            });
            
            if (clothingItems.length === 0) {
                saveCanvasAsImage(canvas);
            }
        };
    };
}

function saveCanvasAsImage(canvas) {
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '小白的换装盲盒.png';
        a.click();
        URL.revokeObjectURL(url);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function openPanel(id) {
    closeAllPanels();
    document.getElementById(id).classList.add('show');
}

function closeAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('show');
    });
    document.querySelectorAll('.reset-item').forEach(item => {
        item.classList.remove('selected');
    });
    gameState.selectedResetItems = [];
}

// 音频控制函数
function initAudio() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3;
    bgMusic.play().catch(e => {
        console.log('背景音乐自动播放被阻止，需要用户交互后才能播放');
    });
    
    // 初始化音频开关事件
    initAudioToggles();
}

function initAudioToggles() {
    // 背景音乐开关
    const bgMusicToggle = document.getElementById('bgMusicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    bgMusicToggle.addEventListener('change', function() {
        if (this.checked) {
            bgMusic.play().catch(e => {
                console.log('背景音乐播放被阻止');
            });
        } else {
            bgMusic.pause();
        }
    });
    
    // 音效开关
    const soundEffectsToggle = document.getElementById('soundEffectsToggle');
    soundEffectsToggle.addEventListener('change', function() {
        // 存储音效开关状态
        localStorage.setItem('soundEffectsEnabled', this.checked);
    });
}

function playSound(id) {
    // 检查音效是否开启
    const soundEffectsEnabled = localStorage.getItem('soundEffectsEnabled') !== 'false';
    if (!soundEffectsEnabled) return;
    
    const sound = document.getElementById(id);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => {
            console.log('音效播放被阻止');
        });
    }
}

function playBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.play().catch(e => {
            console.log('背景音乐播放被阻止');
        });
    }
}

// 兑换码确认按钮点击事件
document.getElementById('confirmRedeemBtn').onclick = function() {
    const input = document.getElementById('redeemInput');
    const code = input.value.trim().toLowerCase();
    
    // 检查是否已经使用过兑换码
    const hasRedeemed = localStorage.getItem('hasRedeemed');
    if (hasRedeemed) {
        showToast('已使用');
        closeAllPanels();
        input.value = '';
        return;
    }
    
    if (code === 'baiyu') {
        gameState.drawCount += 36;
        localStorage.setItem('drawCount', gameState.drawCount);
        localStorage.setItem('hasRedeemed', 'true');
        updateDrawCount();
        showToast('兑换成功！+36次！');
    } else {
        showToast('兑换码错误，请重试');
    }
    
    closeAllPanels();
    input.value = '';
};

// 公众号图标点击事件
document.getElementById('wechatIcon').onclick = function() {
    const wechatPopup = document.getElementById('wechatPopup');
    wechatPopup.classList.toggle('show');
};

// 兑换码输入框回车事件
document.getElementById('redeemInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('confirmRedeemBtn').click();
    }
});

// 换背景按钮点击事件
document.getElementById('bgBtn').onclick = function() {
    openPanel('bgPanel');
};

// 设置按钮点击事件
document.getElementById('settingsIcon').onclick = function() {
    openPanel('settingsPanel');
};

// 重置按钮点击事件
document.getElementById('resetBtn').onclick = function() {
    openPanel('resetPanel');
};

// 保存按钮点击事件
document.getElementById('saveBtn').onclick = function() {
    openPanel('savePanel');
};

// 兑换码按钮点击事件
document.getElementById('redeemBtn').onclick = function() {
    openPanel('redeemPanel');
};

// 确认重置按钮点击事件
document.getElementById('confirmResetBtn').onclick = function() {
    confirmReset();
};

// 取消重置按钮点击事件
document.getElementById('cancelResetBtn').onclick = function() {
    closeAllPanels();
};

// 保存图片按钮点击事件
document.getElementById('saveImageBtn').onclick = function() {
    saveImage();
    closeAllPanels();
};

// 取消兑换码按钮点击事件
document.getElementById('cancelRedeemBtn').onclick = function() {
    closeAllPanels();
};

// 关闭设置按钮点击事件
document.getElementById('closeSettingsBtn').onclick = function() {
    closeAllPanels();
};

// 遮罩层点击关闭面板
document.getElementById('mask').onclick = function() {
    closeAllPanels();
};