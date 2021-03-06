module.exports = {
    "help_url": {
        "audiosource": "http://docs.cocos.com/creator/manual/zh/components/audiosource.html",
        "animation": "http://www.cocos.com/docs/creator/components/animation.html",
        "sprite": "http://www.cocos.com/docs/creator/components/sprite.html",
        "label": "http://www.cocos.com/docs/creator/components/label.html",
        "canvas": "http://www.cocos.com/docs/creator/components/canvas.html",
        "spine": "http://www.cocos.com/docs/creator/components/spine.html",
        "widget": "http://www.cocos.com/docs/creator/components/widget.html",
        "button": "http://www.cocos.com/docs/creator/components/button.html",
        "progressbar": "http://www.cocos.com/docs/creator/components/progress.html",
        "mask": "http://www.cocos.com/docs/creator/components/mask.html",
        "scrollview": "http://www.cocos.com/docs/creator/components/scrollview.html",
        "scrollbar": "http://www.cocos.com/docs/creator/components/scrollbar.html",
        "layout": "http://www.cocos.com/docs/creator/components/layout.html",
        "tiledmap": "http://www.cocos.com/docs/creator/components/tiledmap.html",
        "editbox": "http://www.cocos.com/docs/creator/components/editbox.html",
        "videoplayer": "http://www.cocos.com/docs/creator/components/videoplayer.html",
        "motionStreak": "http://www.cocos.com/docs/creator/components/motion-streak.html",
        "richtext": "http://www.cocos.com/docs/creator/components/richtext.html",
        "pageview": "http://www.cocos.com/docs/creator/components/pageview.html",
        "pageviewIndicator": "http://www.cocos.com/docs/creator/components/pageviewIndicator.html",
        "toggle": "http://www.cocos.com/docs/creator/components/toggle.html",
        "toggleGroup": "http://www.cocos.com/docs/creator/components/toggleGroup.html",
        "toggleContainer": "http://www.cocos.com/docs/creator/components/toggleContainer.html",
        "slider": "http://www.cocos.com/docs/creator/components/slider.html",
        "block_input_events": "http://www.cocos.com/docs/creator/components/block-input-events.html",
        "wx_subcontext_view": "http://docs.cocos.com/creator/manual/zh/publish/publish-wechatgame-sub-domain.html"
    },
    'animation': {
        'default_clip': '在勾选自动播放或调用 play() 时默认播放的动画 clip。',
        'clips': '通过脚本可以访问并播放的 AnimationClip 列表',
        'play_on_load': '是否在运行游戏后自动播放默认动画 clip。'
    },
    'audio': {
        'clip': '即将通过该组件播放的 AudioClip 引用',
        'volume': '通过该音源组件播放的声音的音量',
        'mute': '静音开关，静音的音源可以继续播放，但不会发出声音',
        'loop': '是否循环播放',
        'play_on_load': '是否在运行游戏后自动播放音源'
    },
    'sprite': {
        'sprite_frame': '渲染 Sprite 使用的 SpriteFrame 图片资源',
        'atlas': '图片资源所属的 Atlas 图集资源',
        'type': '渲染模式：\n - 普通(Simple)：修改尺寸会整体拉伸图像，适用于序列帧动画和普通图像 \n' +
        '- 九宫格（Sliced）：修改尺寸时四个角的区域不会拉伸，适用于 UI 按钮和面板背景 \n' +
        '- 平铺（Tiled）：修改尺寸时会不断平铺原始大小的图片 \n' +
        '- 填充（Filled）：设置一定的填充起始位置和方向，能够以一定比率剪裁显示图片',
        'original_size': '是否使用图片资源的原始尺寸作为 Sprite 节点的 size',
        'edit_button': '编辑',
        'select_button': '选择',
        'select_tooltip': '选择 Atlas 中的其他 SpriteFrame',
        'edit_tooltip': '打开 Sprite 编辑器，设置九宫格等数据',
        'fill_type': '填充方向，可以选择横向（Horizontal），纵向（Vertical）和扇形（Radial）三种方向',
        'fill_center': '扇形填充时，指定扇形的中心点，取值范围 0 ~ 1',
        'fill_start': '填充起始位置，输入一个 0 ~ 1 之间的小数表示起始位置的百分比',
        'fill_range': '填充总量，取值范围 0 ~ 1 指定显示图像范围的百分比',
        'src_blend_factor': '混合显示两张图片时，源图片的取值模式',
        'dst_blend_factor': '混合显示两张图片时，目标图片的取值模式',
        'size_mode': '指定 Sprite 所在节点的尺寸，CUSTOM 表示自定义尺寸，TRIMMED 表示取原始图片剪裁透明像素后的尺寸，RAW 表示取原始图片未剪裁的尺寸',
        'trim': '节点约束框内是否包括透明像素区域，勾选此项会去除节点约束框内的透明区域'
    },
    'button': {
        'click_event': {
            'target': '接收点击事件的节点',
            'component': '接收点击事件的组件',
            'handler': '处理点击事件的方法',
            "customEventData": "传给事件处理函数的额外参数，这个数据会当作最后一个参数传递给事件处理函数。"
        },
        'interactable': '按钮是否可交互，这一项未选中时，按钮处在禁用状态',
        'transition': '按钮状态变化时的过渡类型',
        'normal_color': '普通状态的按钮背景颜色',
        'pressed_color': '按下状态的按钮背景颜色',
        'hover_color': '悬停状态的按钮背景颜色',
        'disabled_color': '禁用状态的按钮背景颜色',
        'duration': '按钮颜色变化或者缩放变化的过渡时间',
        'zoom_scale': '当用户点击按钮后，按钮会缩放到一个值，这个值等于 Button 原始 scale * zoomScale, zoomScale 可以为负数',
        'auto_gray_effect': "如果这个标记为 true，当 button 的 interactable 属性为 false 的时候，会使用内置 shader 让 button 的 target 节点的 sprite 组件变灰",
        'normal_sprite': '普通状态的按钮背景图资源',
        'pressed_sprite': '按下状态的按钮背景图资源',
        'hover_sprite': '悬停状态的按钮背景图资源',
        'disabled_sprite': '禁用状态的按钮背景图资源',
        'target': '指定 Button 背景节点，Button 状态改变时会修改此节点的 Color 或 Sprite 属性',
        'click_events': '按钮点击事件的列表。先将数量改为1或更多，就可以为每个点击事件设置接受者和处理方法'
    },
    'canvas': {
        'design_resolution': '设计分辨率是游戏在设计时使用的分辨率参考，以像素为单位，通过下面的适配策略，可以在不同分辨率的设备上按照一定的方式对 Canvas 进行整体缩放来适配。',
        'fit_height': '自动缩放 Canvas 使设计分辨率的高度充满设备屏幕的高度',
        'fit_width': '自动缩放 Canvas 使设计分辨率的宽度充满设备屏幕的宽度'
    },
    'label': {
        'string': 'Label 显示的文本内容字符串',
        'horizontal_align': '文字水平对齐模式',
        'vertical_align': '文字垂直对齐模式',
        'font_size': '文字尺寸，以 point 为单位',
        'font_family': '文字字体名字',
        'line_height': '文字行高，以 point 为单位',
        'overflow': '文字排版模式，包括以下三种：\n 1. CLAMP: 节点约束框之外的文字会被截断 \n 2. SHRINK: 自动根据节点约束框缩小文字\n 3. RESIZE: 根据文本内容自动更新节点的 height 属性.',
        'wrap': '是否允许自动换行',
        'font': 'Label 使用的字体资源',
        'system_font': '是否使用系统默认字体，选中此项会将 file 属性置空',
    },
    'progress': {
        'bar_sprite': '进度条显示用的 Sprite 节点，可以动态改变尺寸',
        'mode': '进度条显示模式，目前支持水平和垂直两种',
        'total_length': '进度条在 progress 为 1 时的最大长度',
        'progress': '当前进度指示，范围从0到1',
        'reverse': '是否反向驱动进度条'
    },
    'scrollbar': {
        'handle': '作为当前滚动区域位置显示的滑块 Sprite',
        'direction': 'ScrollBar的滚动方向',
        'auto_hide': '是否在没有滚动动作时自动隐藏 ScrollBar',
        'auto_hide_time': '没有滚动动作后经过多久会自动隐藏',
    },
    'scrollview': {
        'content': '包含可滚动展示内容的节点引用',
        'horizontal': '是否开启水平滚动',
        'vertical': '是否开启垂直滚动',
        'inertia': '是否开启滚动惯性',
        'brake': '开启惯性后，在用户停止触摸后滚动多快停止，0表示永不停止，1表示立刻停止',
        'elastic': '是否允许滚动内容超过边界，并在停止触摸后回弹',
        'bounce_time': '回弹持续的时间',
        'horizontal_bar': '水平滚动的 ScrollBar',
        'vertical_bar': '垂直滚动的 ScrollBar',
        "bounceDuration": '回弹持续的时间，0 表示将立即反弹',
        "scrollEvents": '滚动视图的事件回调函数',
        "cancelInnerEvents": '滚动行为是否会取消子节点上注册的触摸事件'
    },
    'pageview': {
        "sizeMode": "页面视图中每个页面大小类型",
        "direction": '页面视图滚动方向',
        "scrollThreshold": '滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原',
        "pageTurningEventTiming": '设置 PageView 页面自动滚动动画结束的阈值，修改此值可以调整 PageView 事件的发送时机。',
        "indicator": '页面视图指示器组件',
        "pageTurningSpeed": '每个页面翻页时所需时间。单位：秒',
        'pageEvents': '页面视图的事件回调函数',
        "autoPageTurningThreshold": "快速滑动翻页临界值。 当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值，该值与此临界值相比较，如果大于临界值，则进行自动翻页",
    },
    'pageview_indicator': {
        'spriteFrame': '每个页面标记显示的图片',
        'direction': '页面标记摆放方向',
        'cell_size': '页面标记的大小',
        'spacing': '页面标记之间的边距'
    },
    'toggle': {
        'interactable': 'Toggle 是否可交互，这一项未选中时，Toggle 处在禁用状态',
        'transition': 'Toggle 状态变化时的过渡类型',
        'normal_color': '普通状态的 Toggle 背景颜色',
        'resize_node': '把 Toggle 的 node 的大小重置成 Target 的 node 的大小',
        'pressed_color': '按下状态的 Toggle 背景颜色',
        'hover_color': '悬停状态的 Toggle 背景颜色',
        'disabled_color': '禁用状态的 Toggle 背景颜色',
        'duration': 'Toggle 颜色变化或者缩放变化的过渡时间',
        'zoom_scale': '当用户点击 Toggle 后，Toggle 会缩放到一个值，这个值等于 Toggle 原始 scale * zoomScale, zoomScale 可以为负数',
        'auto_gray_effect': "如果这个标记为 true，当 toggle 的 interactable 属性为 false 的时候，会使用内置 shader 让 toggle 的 target 节点的 sprite 组件变灰",
        'normal_sprite': '普通状态的 Toggle 背景图资源',
        'pressed_sprite': '按下状态的 Toggle 背景图资源',
        'hover_sprite': '悬停状态的 Toggle 背景图资源',
        'disabled_sprite': '禁用状态的 Toggle 背景图资源',
        'target': '指定 Toggle 背景节点，Toggle 状态改变时会修改此节点的 Color 或 Sprite 属性',
        'isChecked': '如果这个设置为 true，则 check mark 组件会处于 enabled 状态，否则处于 disabled 状态。',
        'checkMark': 'Toggle 处于选中状态时显示的精灵图片',
        'toggleGroup': 'Toggle 所属的 ToggleGroup，这个属性是可选的。如果这个属性为 null，则 Toggle 是一个 CheckBox，否则，Toggle 是一个 RadioButton。'
    },
    'toggle_group': {
        'allowSwitchOff': "如果这个设置为 true， 那么 toggle 按钮在被点击的时候可以反复地被选中和未选中。"
    },
    'slider': {
        'handle': '滑块按钮部件',
        'direction': '滑动方向',
        'progress': '当前进度值，该数值的区间是 0-1 之间。',
        'slideEvents': '滑动器组件事件回调函数'
    },
    'widget': {
        'target': '指定一个对齐目标，只能是当前节点的其中一个父节点，默认为空，为空时表示当前父节点',
        'align_top': '是否对齐父节点顶边',
        'align_bottom': '是否对齐父节点底边',
        'align_left': '是否对齐父节点左边',
        'align_right': '是否对齐父节点右边',
        'align_h_center': '是否对齐父节点水平中点，开启这一选项将取消水平轴上的其他对齐选项',
        'align_v_center': '是否对齐父节点垂直中点，开启这一选项将取消垂直轴上的其他对齐选项',
        "align_mode": "指定 Widget 的对齐模式，用于决定运行时 Widget 应该何时刷新。",
        'top': '本节点顶边和父节点顶边的距离，可输入负值，默认单位为像素（px），也可以输入百分比，根据父节点 height 和百分比数值计算出距离',
        'bottom': '本节点底边和父节点底边的距离，可输入负值，默认单位为像素（px），也可以输入百分比，根据父节点 height 和百分比数值计算出距离',
        'left': '本节点左边和父节点左边的距离，可输入负值，默认单位为像素（px），也可以输入百分比，根据父节点 width 和百分比数值计算出距离',
        'right': '本节点右边和父节点右边的距离，可输入负值，默认单位为像素（px），也可以输入百分比，根据父节点 width 和百分比数值计算出距离',
        'horizontal_center': '水平居中的偏移值，可输入负值，默认单位为像素（px），也可以是百分比',
        'vertical_center': '垂直居中的偏移值，可输入负值，默认单位为像素（px），也可以是百分比'
    },
    'layout': {
        'layout_type': '自动布局模式，包括：\n 1. NONE，不会对子节点进行自动布局 \n 2. HORIZONTAL，横向自动排布子物体 \n 3. VERTICAL，垂直自动排布子物体\n 4. GRID, 采用网格方式对子物体自动进行布局',
        'resize_mode': '缩放模式，包括：\n 1. NONE，不会对子节点和容器进行大小缩放 \n 2. CHILD, 对子节点的大小进行缩放 \n 3. CONTAINER, 对容器的大小进行缩放',
        'padding_left': 'Layout 节点左边界和子节点的内边距',
        'padding_right': 'Layout 节点右边界和子节点的内边距',
        'padding_top': 'Layout 节点上边界和子节点的内边距',
        'padding_bottom': 'Layout 节点下边界和子节点的内边距',
        'space_x': '相邻子节点之间的水平距离',
        'space_y': '相邻子节点之间的垂直距离',
        'vertical_direction': '垂直排列子节点的方向，包括：\n 1. TOP_TO_BOTTOM, 从上到下排列 \n 2. BOTTOM_TO_TOP, 从下到上排列',
        'horizontal_direction': '水平排列子节点的方向，包括：\n 1. LEFT_TO_RIGHT, 从左到右排列 \n 2. RIGHT_TO_LEFT, 从右到左排列',
        'cell_size': '网格布局中，规定每一个网格的大小',
        'start_axis': '网格布局中，子物体排版时的起始方向轴，支持水平和垂直两个方向。',
    },
    'particle': {
        'export_title': "将自定义的粒子数据导出成 plist 文件",
        'export': "导出",
        'export_error': "该资源不支持导出到项目外",
        'sync': "同步",
        'sync_tips': "同步 File 中的参数到 Custom"
    },
    'editbox': {
        "string": "输入框的初始输入内容，如果为空则会显示占位符的文本",
        "backgroundImage": "输入框的背景图片",
        "input_flag": "指定输入标识：可以指定输入方式为密码或者单词首字母大写",
        "returnType": "指定移动设备上面回车按钮的样式",
        "input_mode": "指定输入模式: ANY表示多行输入，其它都是单行输入，移动平台上还可以指定键盘样式。",
        "font_size": "输入框文本的字体大小",
        "line_height": "输入框文本的行高",
        "font_color": "输入框文本的颜色",
        "stay_on_top": "设置为 True 则输入框总是可见，并且永远在游戏视图的上面",
        "tab_index": "修改 DOM 输入元素的 tabIndex，这个属性只有在 Web 上面修改有意义。",
        "placeholder": "输入框占位符的文本内容",
        "placeholder_font_size": "输入框占位符的字体大小",
        "placeholder_font_color": "输入框占位符的字体颜色",
        "max_length": "输入框最大允许输入的字符个数",
    },
    "videoplayer": {
        "resourceType": "视频来源，支持本地视频 URL 和远程视频 URL",
        "url": "远程视频的 URL",
        "video": "本地视频的 URL",
        "volume": "视频的音量（0.0 ~ 1.0）",
        "mute": "是否静音视频。静音时设置音量为 0，取消静音是恢复原来的音量",
        "currentTime": "从哪个时间点开始播放视频",
        "keepAspectRatio": "是否保持视频原有的宽高比",
        "isFullscreen": "是否全屏播放视频",
    },
    "webview": {
        "url": "指定一个 URL 地址，这个地址以 http 或者 https 开头，请填写一个有效的 URL 地址。"
    },
    "richtext": {
        "string": "富文本的内容字符串, 你可以在里面使用 BBCode 来指定特定文本的样式",
        "horizontal_align": "水平对齐方式",
        "font_size": "字体大小, 单位是 point",
        "font": "富文本定制字体",
        "line_height": "字体行高, 单位是 point",
        "max_width": "富文本的最大宽度, 传 0 的话意味着必须手动换行.",
        "image_atlas": "对于 img 标签里面的 src 属性名称，都需要在 imageAtlas 里面找到一个有效的 spriteFrame，否则 img tag 会判定为无效。",
        "handleTouchEvent": "选中此选项后，RichText 将阻止节点边界框中的所有输入事件（鼠标和触摸），从而防止输入事件穿透到底层节点。"
    },
    'skeleton': {
        "skeleton_data": "骨骼信息数据，拖拽 Spine 导出的骨骼动画信息 json 资源到这里来开始使用",
        "default_skin": "选择默认的皮肤",
        "animation": "正在播放的动画名称",
        "loop": "是否循环播放当前动画",
        "time_scale": "当前骨骼中所有动画的时间缩放率",
        "debug_slots": "是否显示 slot 的 debug 信息",
        "debug_bones": "是否显示 bone 的 debug 信息",
        "premultipliedAlpha": "是否启用贴图预乘",
    },
    "dragon_bones": {
        "dragon_bones_asset": "骨骼信息数据，拖拽 DragonBones 导出的骨骼动画信息 json 资源到这里来开始使用",
        "dragon_bones_atlas_asset": "Texture 信息数据，拖拽 DragonBones 导出的 Texture 信息 json 资源到这里来开始使用",
        "armature_name": "当前的 Armature 名称",
        "animation_name": "当前播放的动画名称",
        "time_scale": "当前骨骼中所有动画的时间缩放率",
        "play_times": "播放默认动画的循环次数\n-1 表示使用配置文件中的默认值\n0 表示无限循环\n>0 表示循环次数",
        "debug_bones": "是否显示 bone 的 debug 信息"
    },
    'motionStreak': {
        'fadeTime': "拖尾的渐隐时间,以秒为单位",
        'minSeg': "拖尾之间最小距离",
        'stroke': "拖尾的宽度",
        'texture': "拖尾的贴图",
        'color': "拖尾的颜色",
        'fastMode': "是否启用了快速模式"
    },
    "missing_scirpt": {
        "error_compiled": '载入脚本时报错或脚本已丢失，请检查报错信息并进行修正，该组件将在修正后自动还原。如果脚本已删除，请手动删除该组件。',
        "error_not_compiled": '脚本编译失败，请检查报错信息并进行修正，该组件将在修正后自动还原。'
    },
    'collider': {
        'editing': '是否需要编辑此碰撞组件',
        'category': '碰撞组件所属类别',
        'mask': '可以与碰撞组件相碰撞的组件掩码'
    },
    'particle_system': {
        'preview': '在编辑器模式下预览粒子，启用后选中粒子时，粒子将自动播放',
        'custom': '是否自定义粒子属性',
        'file': 'plist 格式的粒子配置文件',
        'spriteFrame': '粒子贴图定义',
        'texture': '粒子贴图，只读属性，请使用 spriteFrame 属性来替换贴图',
        'particleCount': '当前播放的粒子数量',
        'srcBlendFactor': '指定原图混合模式',
        'dstBlendFactor': '指定目标的混合模式',
        'playOnLoad': '如果设置为 true 运行时会自动发射粒子',
        'autoRemoveOnFinish': '粒子播放完毕后自动销毁所在的节点',
        'duration': '发射器生存时间，单位秒，-1表示持续发射',
        'emissionRate': '每秒发射的粒子数目',
        'life': '粒子的运行时间及变化范围',
        'totalParticles': '粒子最大数量',
        'startColor': '粒子初始颜色',
        'startColorVar': '粒子初始颜色变化范围',
        'endColor': '粒子结束颜色',
        'endColorVar': '粒子结束颜色变化范围',
        'angle': '粒子角度及变化范围',
        'startSize': '粒子的初始大小及变化范围',
        'endSize': '粒子结束时的大小及变化范围',
        'startSpin': '粒子开始自旋角度及变化范围',
        'endSpin': '粒子结束自旋角度及变化范围',
        'sourcePos': '发射器位置',
        'posVar': '发射器位置的变化范围。（横向和纵向）',
        'positionType': '粒子位置类型',
        'emitterMode': '发射器类型',
        'gravity': '重力',
        'speed': '速度及变化范围',
        'tangentialAccel': '每个粒子的切向加速度及变化范围，即垂直于重力方向的加速度，只有在重力模式下可用',
        'radialAccel': '粒子径向加速度及变化范围，即平行于重力方向的加速度，只有在重力模式下可用',
        'rotationIsDir': '每个粒子的旋转是否等于其方向，只有在重力模式下可用',
        'startRadius': '初始半径及变化范围，表示粒子出生时相对发射器的距离，只有在半径模式下可用',
        'endRadius': '结束半径及变化范围，只有在半径模式下可用',
        'rotatePerS': '粒子每秒围绕起始点的旋转角度及变化范围，只有在半径模式下可用',
    },
    "mask": {
        'type': '遮罩类型',
        'spriteFrame': '遮罩所需要的贴图',
        'inverted': '反向遮罩（不支持 Canvas 模式）',
        'alphaThreshold': 'Alpha阈值，只有当模板的像素的 alpha 大于 alphaThreshold 时，才会绘制内容（不支持 Canvas 模式）',
        'segements': '椭圆遮罩的曲线细分数'
    },
    'physics': {
        'rigidbody': {
            'enabledContactListener': '是否启用接触接听器。当 collider 产生碰撞时，只有开启了接触接听器才会调用相应的回调函数',
            'bullet': '这个刚体是否是一个快速移动的刚体，并且需要禁止穿过其他快速移动的刚体',
            'type': '刚体类型： Static（静态）, Kinematic（不受外力）, Dynamic（动态）和 Animated（通过设置线性速度和角速度驱动）',
            'allowSleep': '如果此刚体永远都不应该进入睡眠，那么设置这个属性为 false。需要注意这将使 CPU 占用率提高',
            'gravityScale': '缩放应用在此刚体上的重力值',
            'linearDamping': 'Linear damping 用于衰减刚体的线性速度。衰减系数可以大于 1，但是当衰减系数比较大的时候，衰减的效果会变得比较敏感。',
            'angularDamping': 'Angular damping 用于衰减刚体的角速度。衰减系数可以大于 1，但是当衰减系数比较大的时候，衰减的效果会变得比较敏感。',
            'linearVelocity': '刚体在世界坐标下的线性速度',
            'angularVelocity': '刚体的角速度',
            'fixedRotation': '是否禁止此刚体进行旋转',
            'awake': '是否立刻唤醒此刚体'
        },
        'physics_collider': {
            'density': '密度',
            'sensor': '一个传感器类型的碰撞体会产生碰撞回调，但是不会发生物理碰撞效果。',
            'friction': '摩擦系数，取值一般在 [0, 1] 之间',
            'restitution': '弹性系数，取值一般在 [0, 1]之间',
            'anchor': '刚体的锚点。',
            'connectedAnchor': '关节另一端刚体的锚点。',
            'connectedBody': '关节另一端链接的刚体',
            'collideConnected': '链接到关节上的两个刚体是否应该相互碰撞？',
            'distance': '关节两端的距离',
            'frequency': '弹性系数。',
            'dampingRatio': '阻尼，表示关节变形后，恢复到初始状态受到的阻力。',
            'linearOffset': '关节另一端的刚体相对于起始端刚体的位置偏移量',
            'angularOffset': '关节另一端的刚体相对于起始端刚体的角度偏移量',
            'maxForce': '可以应用于刚体的最大的力值',
            'maxTorque': '可以应用于刚体的最大扭矩值',
            'correctionFactor': '位置矫正系数，范围为 [0, 1]',
            'mouseRegion': '用于注册触摸事件的节点。如果没有设置这个值，那么将会使用关节的节点来注册事件。',
            'target': '目标点，鼠标关节将会移动选中的刚体到指定的目标点',
            'localAxisA': '指定刚体可以移动的方向。',
            'enableLimit': '是否开启关节的距离限制？',
            'enableMotor': '是否开启关节马达？',
            'lowerLimit': '刚体能够移动的最小值',
            'upperLimit': '刚体能够移动的最大值',
            'maxMotorForce': '可以施加到刚体的最大力。',
            'motorSpeed': '期望的马达速度。',
            'referenceAngle': '相对角度。两个物体之间角度为零时可以看作相等于关节角度',
            'lowerAngle': '角度的最低限制。',
            'upperAngle': '角度的最高限制。',
            'maxMotorTorque': '可以施加到刚体的最大扭矩。',
            'maxLength': '最大长度。',
            'offset': '位置偏移量',
            'size': '包围盒大小',
            'radius': '圆形半径',
            'tag': '标签。当一个节点上有多个碰撞组件时，在发生碰撞后，可以使用此标签来判断是节点上的哪个碰撞组件被碰撞了。',
            'points': '多边形顶点数组'
        }
    },
    'block_input_events': {
        'brief_help': '该组件将拦截所有输入事件，防止输入穿透到下层节点，一般用于上层 UI 的背景。'
    },
    'tiledtile': {
        'row': '指定 TiledTile 的横向坐标，以地图块为单位',
        'column': '指定 TiledTile 的纵向坐标，以地图块为单位',
        'gid': '指定 TiledTile 的 gid 值',
        'layer': '指定 TiledTile 属于哪一个 TiledLayer'
    }
};