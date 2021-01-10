async function handleRequest(request) {
    const init = {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
    return new Response(renderHTML(), init);
  }
  addEventListener('fetch', event => {
    return event.respondWith(handleRequest(event.request))
  })
  
  
  function renderHTML() {
    return `<!DOCTYPE html>

    <head>
        <script>
            /**
            * SCF_GATEWAY：SCF 云函数网关地址
            * SITE_NAME：站点名称
            */
            window.GLOBAL_CONFIG = {
                SCF_GATEWAY: "",
                SITE_NAME: "FODI",
                IS_CF: true
            };
            if (window.GLOBAL_CONFIG.SCF_GATEWAY.indexOf('workers') === -1) {
                window.GLOBAL_CONFIG.SCF_GATEWAY += '/fodi/';
                window.GLOBAL_CONFIG.IS_CF = false;
            }
            // if (location.protocol === 'http:') {
            //     location.href = location.href.replace(/http/, 'https');
            // }
        </script>
        <meta charset="utf-8">
        <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
        <script src="//s0.pstatp.com/cdn/expire-1-M/ionicons/4.5.6/ionicons.js"></script>
        <script src="//s0.pstatp.com/cdn/expire-1-M/marked/0.6.2/marked.min.js"></script>
        <script src="//s0.pstatp.com/cdn/expire-1-M/highlight.js/9.15.6/highlight.min.js"></script>
        <link href="//s0.pstatp.com/cdn/expire-1-M/highlight.js/9.15.6/styles/github.min.css" rel="stylesheet" />
        <link href="//s0.pstatp.com/cdn/expire-1-M/github-markdown-css/3.0.1/github-markdown.min.css" rel="stylesheet" />
        <script src="//s0.pstatp.com/cdn/expire-1-M/jquery/3.4.0/jquery.min.js"></script>
        <script src="//s0.pstatp.com/cdn/expire-1-M/fancybox/3.5.7/jquery.fancybox.min.js"></script>
        <link href="//s0.pstatp.com/cdn/expire-1-M/fancybox/3.5.7/jquery.fancybox.min.css" rel="stylesheet" />
        <style>
            .password-wrapper {
                display: flex;
                align-items: center;
            }
    
            .password {
                margin: 0 auto;
                padding-top: 1em;
                display: none;
            }
    
            .password input {
                height: 2em;
                outline: none;
                border: solid rgb(218, 215, 215) 1px;
            }
    
            .password button {
                background: white;
                height: 2em;
                outline: none;
                border: solid rgb(218, 215, 215) 1px;
            }
    
            .password button:hover {
                color: white;
                background: rgb(218, 215, 215);
            }
    
            pre * {
                font-family: Courier New;
            }
    
            .preview {
                display: none;
                font-size: .8em;
            }
    
            .content {
                clear: both;
                padding: 0 1em;
                margin: 0 auto;
                text-align: center;
            }
    
            .file-name {
                line-height: 1em;
                padding: 1em 1em 0;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
            }
    
            .btn {
                float: right;
                text-align: center;
                border: solid rgb(218, 215, 215) 1px;
                border-radius: 1em;
                margin: 1em .2em;
                width: 4em;
                height: 2em;
                line-height: 2em;
                user-select: none;
                -moz-user-select: none;
                -o-user-select: none;
                -khtml-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }
    
            .btn:hover {
                color: white;
                background: rgb(218, 215, 215);
            }
    
            .btn.download {
                margin-right: 1em;
            }
    
            #arrow-back,
            #arrow-forward {
                color: rgb(218, 215, 215);
            }
    
            .loading-wrapper {
                display: none;
                position: fixed;
                height: 2em;
                line-height: 2em;
                margin-top: .5em;
                width: 100%;
                z-index: 1;
            }
    
            .loading {
                color: white;
                background: rgb(218, 215, 215);
                height: 100%;
                width: 8em;
                margin: 0 auto;
                text-align: center;
                border-radius: 1em;
            }
    
            ion-icon {
                font-size: 1.5em;
            }
    
            * {
                box-sizing: border-box;
                font-family: serif;
            }
    
            .markdown-body {
                min-width: 200px;
                margin: 0 auto;
                padding: .7em 1em;
                font-size: .8em;
            }
    
            .markdown-body h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin-top: 0;
            }
    
            .markdown-body img {
                max-width: 90%;
                max-height: 800px;
                width: auto;
                height: auto;
                display: block;
                margin: 0 auto;
            }
    
            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
    
            .header-wrapper {
                position: fixed;
                height: 3em;
                width: 100%;
                -moz-user-select: none;
                -o-user-select: none;
                -khtml-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
    
            .header {
                padding: 0 1.8em 0 1em;
                height: 100%;
                display: flex;
                align-items: center;
                border-bottom: solid rgb(218, 215, 215) 1px;
            }
    
            .logo {
                margin-right: .3em;
            }
    
            .site {
                white-space: nowrap;
                /* margin-left: auto;
                    padding-left: 2em; */
            }
    
            .nav {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
    
            .nav-path,
            .nav-arr {
                font-size: 1em;
                height: 1.5em;
                margin-right: .3em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                cursor: default;
            }
    
            #main-page:hover,
            .nav-path:hover,
            .tree-node:hover,
            .row.file-wrapper:hover {
                color: rgb(90, 101, 133);
                cursor: pointer;
            }
    
    
            .container {
                position: fixed;
                width: 100%;
                height: calc(100% - 3em);
                margin-top: 3em;
            }
    
            .main {
                position: relative;
                height: 100%;
                width: 100%;
            }
    
            .left {
                position: absolute;
                display: inline-grid;
                width: 20%;
                height: 100%;
                font-size: .8em;
                overflow: scroll;
            }
    
            .tree-node-wrapper {
                margin-left: 1.5em;
            }
    
            .tree-node {
                display: flex;
                align-items: center;
            }
    
            .tree-node-name {
                margin-left: .3em;
                white-space: nowrap;
            }
    
            .right {
                position: absolute;
                width: 80%;
                height: 100%;
                margin-left: 20%;
                overflow: scroll;
            }
    
            .row {
                height: 2.5em;
                padding: 0 .8em 0 1em;
                display: flex;
                align-items: center;
                border-bottom: solid rgb(218, 215, 215) 1px;
            }
    
            .row.file-wrapper {
                font-size: .8em;
                padding: 0 1em;
                height: 2em;
            }
    
            .file {
                width: 100%;
                display: flex;
                align-items: center;
            }
    
            .name {
                display: flex;
                align-items: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 70%;
                padding-left: .3em;
            }
    
            .list-header .name {
                width: calc(70% + 1.1em);
                padding-left: 0;
            }
    
            .time {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: right;
                ;
                width: 133px;
            }
    
            .size {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-left: auto;
            }
    
            @media screen and (max-width: 1000px) {
                .left {
                    display: none;
                }
    
                .right {
                    width: 100%;
                    margin-left: initial;
                }
            }
    
            @media screen and (max-width: 800px) {
                .name {
                    width: 60%;
                }
    
                .list-header .name {
                    width: calc(60% + 1.1em);
                }
    
                .file-name {
                    overflow-x: scroll;
                    height: 100%;
                }
            }
    
            @media screen and (max-width: 600px) {
                .name {
                    width: 75%;
                }
    
                .time {
                    display: none;
                }
    
                .header {
                    padding: 0 .3em;
                }
    
                .row {
                    padding: 0 .3em;
                }
    
                .row.file-wrapper {
                    padding: 0 .3em;
                    height: 3em;
                }
    
                .markdown-body {
                    padding: .6em .3em;
                }
    
                .file-name {
                    padding: 1em .3em 0;
                }
    
                .content {
                    padding: 0 .3em;
                }
    
                .btn.download {
                    margin-right: .3em;
                }
    
                .logo {
                    width: 2em;
                    height: 2em;
                }
    
    
            }
        </style>
        <script>
            function createCORSRequest(method, url, timeout) {
                let xhr = new XMLHttpRequest();
                if ('withCredentials' in xhr) {
                    xhr.open(method, url, true);
                } else if (typeof XDomainRequest !== 'undefined') {
                    xhr = new XDomainRequest();
                    xhr.open(method, url);
                } else {
                    xhr = null;
                }
                if (xhr) {
                    xhr.timeout = timeout;
                }
                return xhr;
            }
    
            function sendRequest(method, url, data, headers, callback, error, times) {
                let xhr = createCORSRequest(method, url, 2500);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        callback(xhr.responseText);
                    }
                };
                xhr.timeout = xhr.onerror = () => {
                    if (!times) {
                        times = 0;
                    }
                    console.log({
                        url: url,
                        data: data,
                        times: times
                    })
                    if (times < 1) {
                        sendRequest(method, url, data, headers, callback, error, times + 1);
                    } else if (typeof error === 'function') {
                        error();
                    }
                }
                if (headers) {
                    for (key in headers) {
                        if (headers.hasOwnProperty(key)) {
                            xhr.setRequestHeader(key, headers[key]);
                        }
                    }
                }
                if (data) {
                    xhr.send(data);
                } else {
                    xhr.send();
                }
            }
    
            function renderPage(data, cache) {
                let files;
                if (data) {
                    files = JSON.parse(data);
                    window.fileCache.set(files.parent, files);
                    preCache(files, 0);
                } else {
                    files = cache;
                }
                if (files.parent === window.backFordwardCache.current) {
                    renderPath(files.parent);
                    if (files.encrypted) {
                        handleEncryptedFolder(files);
                    } else {
                        renderFileList(files);
                    }
                    renderTreeNode(files);
                }
                if (document.body.getAttribute('hidden')) {
                    document.body.removeAttribute('hidden');
                }
                document.querySelector('.loading-wrapper').style.display = 'none';
            }
    
            function renderPath(path) {
                const createPathSpan = (text, path) => {
                    let pathSpan = document.createElement('span');
                    pathSpan.innerHTML = text.length > 20 ? text.substring(0, 20) + '..' : text;
                    pathSpan.className = text === '/' ? 'nav-arr' : 'nav-path';
                    if (path) {
                        addPathListener(pathSpan, path);
                    }
                    return pathSpan;
                };
    
                const paths = path.split('/');
                let pathSpanWrapper = document.getElementById('path');
                pathSpanWrapper.innerHTML = '';
                pathSpanWrapper.appendChild(createPathSpan(window.api.root));
                let continualPath = '/';
                for (let i = 1; i < paths.length - 1; i++) {
                    continualPath += paths[i];
                    pathSpanWrapper.appendChild(createPathSpan(paths[i], continualPath));
                    pathSpanWrapper.appendChild(createPathSpan('/'));
                    continualPath += '/';
                }
                pathSpanWrapper.appendChild(createPathSpan(paths[paths.length - 1]));
            }
    
            function renderFileList(files) {
                switchRightDisplay();
    
                const createFileWrapper = (type, name, time, size, path, url) => {
                    let fileWrapper = document.getElementById('file-wrapper-templete').content.cloneNode(true);
                    fileWrapper.querySelector('ion-icon').setAttribute('name', type);
                    fileWrapper.querySelector('.name').innerHTML = name;
                    fileWrapper.querySelector('.time').innerHTML = time;
                    fileWrapper.querySelector('.size').innerHTML = size;
                    addFileListLineListener(fileWrapper.querySelector('.row.file-wrapper'), path, url, size);
                    return fileWrapper;
                };
    
                const formatDate = date => {
                    const addZero = num => num > 9 ? num : '0' + num;
                    date = new Date(date);
                    const year = date.getFullYear();
                    const month = addZero(date.getMonth() + 1);
                    const day = addZero(date.getDate());
                    const hour = addZero(date.getHours());
                    const minute = addZero(date.getMinutes());
                    const second = addZero(date.getSeconds());
                    return 'yyyy-MM-dd HH:mm:ss'
                        .replace('yyyy', year)
                        .replace('MM', month)
                        .replace('dd', day)
                        .replace('HH', hour)
                        .replace('mm', minute)
                        .replace('ss', second);
                };
    
                const formatSize = size => {
                    let count = 0;
                    while (size >= 1024) {
                        size /= 1024;
                        count++;
                    }
                    size = size.toFixed(2);
                    switch (count) {
                        case 1:
                            size += ' KB';
                            break;
                        case 2:
                            size += ' MB';
                            break;
                        case 3:
                            size += ' GB';
                            break;
                        case 4:
                            size += ' TB';
                            break;
                        case 5:
                            size += ' PB';
                            break;
                        default:
                            size += ' B';
                    }
                    return size;
                };
    
                let fileList = document.getElementById('file-list');
                fileList.innerHTML = '';
                files.files.forEach(file => {
                    if (file.name.split('.').pop() === 'md') {
                        if (file.url) {
                            renderReadme(files.parent + '/' + file.name, file.url);
                        }
                    } else {
                        const parent = files.parent === window.api.root ? '' : files.parent;
                        fileList.appendChild(createFileWrapper(
                            file.url ? 'document' : 'folder',
                            file.name,
                            formatDate(file.time),
                            formatSize(file.size),
                            parent + '/' + file.name,
                            file.url
                        ));
                    }
                });
            }
    
            async function renderTreeNode(files) {
                const createTreeNodeWrapper = (array, type, name, path) => {
                    let treeNodeWrapper = document.getElementById('tree-node-wrapper-template').content
                        .cloneNode(true);
                    let icons = treeNodeWrapper.querySelectorAll('ion-icon');
                    icons[0].setAttribute('name', array);
                    icons[1].setAttribute('name', type);
                    treeNodeWrapper.querySelector('.tree-node-name').innerText = name;
                    treeNodeWrapper.appendNode = node => treeNodeWrapper.querySelector('.tree-node-wrapper').append(
                        node);
                    addTreeNodeListener(treeNodeWrapper.querySelector('.tree-node'), path);
                    return treeNodeWrapper;
                }
    
                const paths = files.parent.split('/');
                let absolutePath = max => {
                    let absolutePath = '';
                    for (let j = 1; j <= max; j++) {
                        absolutePath += '/' + paths[j];
                    }
                    return absolutePath;
                };
                let maxIndex = paths.length - 1;
                let currentTreeNode = createTreeNodeWrapper('arrow-dropdown',
                    'folder-open',
                    paths[maxIndex],
                    absolutePath(maxIndex)
                );
                files.files.forEach(file => {
                    if (!file.url) {
                        currentTreeNode.appendNode(createTreeNodeWrapper('arrow-dropright',
                            'folder',
                            file.name,
                            files.parent + '/' + file.name
                        ));
                    }
                });
    
                for (let i = maxIndex - 1; i > 0; i--) {
                    const currentTreeNodeParentAbsolutePath = absolutePath(i);
                    let currentTreeNodeParent = createTreeNodeWrapper('arrow-dropdown',
                        'folder',
                        paths[i],
                        currentTreeNodeParentAbsolutePath
                    );
                    let cache = window.fileCache.get(currentTreeNodeParentAbsolutePath);
                    if (cache) {
                        cache.files.forEach(file => {
                            if (!file.url) {
                                if (file.name === paths[i + 1]) {
                                    currentTreeNodeParent.appendNode(currentTreeNode);
                                } else {
                                    currentTreeNodeParent.appendNode(createTreeNodeWrapper(
                                        'arrow-dropright',
                                        'folder',
                                        file.name,
                                        currentTreeNodeParentAbsolutePath + '/' + file.name
                                    ));
                                }
                            }
                        });
                    } else {
                        currentTreeNodeParent.appendNode(currentTreeNode);
                    }
                    currentTreeNode = currentTreeNodeParent;
                }
    
                const treeRoot = document.getElementById('tree-root');
                treeRoot.innerHTML = '';
                const cache = window.fileCache.get(window.api.root);
                const currentNodeName = currentTreeNode.querySelector('.tree-node-name').innerText;
                if (cache) {
                    cache.files.forEach(file => {
                        if (!file.url) {
                            if (file.name === currentNodeName) {
                                treeRoot.append(currentTreeNode);
                            } else {
                                treeRoot.append(createTreeNodeWrapper(
                                    'arrow-dropright',
                                    'folder',
                                    file.name,
                                    window.api.root + file.name
                                ));
                            }
                        }
                    });
                } else {
                    treeRoot.append(currentTreeNode);
                }
            }
    
            async function renderReadme(path, url) {
                const render = text => {
                    let markedText;
                    try {
                        markedText = marked(text, {
                            gfm: true,
                            highlight: (code, lang, callback) => {
                                return hljs.highlight(lang, code).value;
                            }
                        });
                    } catch (e) {
                        markedText = marked(text, {
                            gfm: true,
                            highlight: (code, lang, callback) => {
                                return hljs.highlight('bash', code).value;
                            }
                        });
                    }
                    if (window.backFordwardCache.current + '/README.md' === path) {
                        if (!window.backFordwardCache.preview) {
                            document.getElementById('readme').innerHTML = markedText;
                            document.querySelector('.markdown-body').style.display = 'block';
                        }
                    }
                    let cache = window.fileCache.get(path);
                    if (!cache || cache === true) {
                        window.fileCache.set(path, text);
                    }
                };
                let text = window.fileCache.get(path);
                if (text === true) {
                    let cacheWaitReadmeFetch = setInterval(() => {
                        text = window.fileCache.get(path);
                        if (typeof text === 'object') {
                            render(text, path);
                            clearInterval(cacheWaitReadmeFetch);
                        } else if (text === false) {
                            clearInterval(cacheWaitReadmeFetch);
                        }
                    }, 100);
                } else if (text) {
                    render(text, path);
                } else {
                    window.fileCache.set(path, true);
                    sendRequest('GET', url, null, null, text => render(text, path), () => window.fileCache.set(path, false));
                }
            }
    
            function handleEncryptedFolder(files) {
                switchRightDisplay('encrypted');
                const password = document.querySelector('.password');
                const input = password.querySelector('input');
                const button = password.querySelector('button');
                const buttonParent = button.parentElement;
                const buttonClone = button.cloneNode(true);
                buttonParent.replaceChild(buttonClone, button);
                input.placeholder = '请输入密码';
                buttonClone.addEventListener('click', event => {
                    const passwd = input.value;
                    if (!input.value) {
                        return;
                    }
                    input.value = '';
                    input.placeholder = '正在验证..';
                    sendRequest(window.api.method,
                        window.api.url,
                        window.api.formatPayload(files.parent, passwd),
                        window.api.headers,
                        data => {
                            const newFiles = JSON.parse(data);
                            if (newFiles.encrypted) {
                                input.placeholder = '密码错误';
                            } else {
                                window.fileCache.set(newFiles.parent, newFiles);
                                fetchFileList(newFiles.parent);
                            }
                        },
                        () => window.fileCache.set(newFiles.parent, false)
                    );
                });
            }
    
            function addPathListener(elem, path) {
                elem.addEventListener('click', event => {
                    fetchFileList(path);
                    switchBackForwardStatus(path);
                });
            }
    
            function addTreeNodeListener(elem, path) {
                elem.addEventListener('click', event => {
                    fetchFileList(path);
                    switchBackForwardStatus(path);
                });
            }
    
            function addFileListLineListener(elem, path, url, size) {
                if (url) {
                    elem.addEventListener('click', event => {
                        window.backFordwardCache.preview = true;
                        const previewHandler = {
                            copyTextContent: (source, text) => {
                                let result = false;
                                let target = document.createElement('pre');
                                target.style.opacity = '0';
                                target.textContent = text || source.textContent;
                                document.body.appendChild(target);
                                try {
                                    let range = document.createRange();
                                    range.selectNode(target);
                                    window.getSelection().removeAllRanges();
                                    window.getSelection().addRange(range);
                                    document.execCommand('copy');
                                    window.getSelection().removeAllRanges();
                                    result = true;
                                } catch (e) { }
                                document.body.removeChild(target);
                                return result;
                            },
                            fileType: suffix => {
                                Array.prototype.contains = function (search) {
                                    const object = this;
                                    for (const key in object) {
                                        if (object.hasOwnProperty(key)) {
                                            if ((eval('/' + search + '/i')).test(object[key])) {
                                                return true;
                                            }
                                        }
                                    }
                                    return false;
                                };
                                if (['bmp', 'jpg', 'png', 'svg', 'webp', 'gif'].contains(suffix)) {
                                    return 'image';
                                } else if (['mp3', 'flac', 'wav'].contains(suffix)) {
                                    return 'audio';
                                } else if (['mp4', 'avi', 'mkv', 'flv', 'm3u8'].contains(suffix)) {
                                    return 'video';
                                } else if (
                                    [
                                        'txt', 'js', 'json', 'css', 'html', 'java', 'c', 'cpp', 'php',
                                        'cmd', 'ps1',
                                        'bat', 'sh', 'py', 'go', 'asp',
                                    ].contains(suffix)
                                ) {
                                    return 'text';
                                } else if (
                                    ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'mpp', 'rtf', 'vsd', 'vsdx'].contains(suffix)
                                ) {
                                    return 'office';
                                }
                            },
                            loadResource: (resource, callback) => {
                                let type;
                                switch (resource.split('.').pop()) {
                                    case 'css':
                                        type = 'link';
                                        break;
                                    case 'js':
                                        type = 'script';
                                        break;
                                }
                                let element = document.createElement(type);
                                let loaded = false;
                                if (typeof callback === 'function') {
                                    element.onload = element.onreadystatechange = () => {
                                        if (!loaded && (!element.readyState || /loaded|complete/.test(
                                            element.readyState))) {
                                            element.onload = element.onreadystatechange = null;
                                            loaded = true;
                                            callback();
                                        }
                                    }
                                }
                                if (type === 'link') {
                                    element.href = resource;
                                    element.rel = 'stylesheet';
                                } else {
                                    element.src = resource;
                                }
                                document.getElementsByTagName('head')[0].appendChild(element);
                            },
    
                            createDplayer: (video, type, elem) => {
                                const host = '//s0.pstatp.com/cdn/expire-1-M';
                                const resources = [
                                    '/dplayer/1.25.0/DPlayer.min.css',
                                    '/dplayer/1.25.0/DPlayer.min.js',
                                    '/hls.js/0.12.4/hls.light.min.js',
                                    '/flv.js/1.5.0/flv.min.js'
                                ];
                                let unloadedResourceCount = resources.length;
                                resources.forEach(resource => {
                                    previewHandler.loadResource(host + resource, () => {
                                        if (!--unloadedResourceCount) {
                                            let option = {
                                                url: video
                                            }
                                            if (type === 'flv') {
                                                option.type = 'flv';
                                            }
                                            new DPlayer({
                                                container: elem,
                                                screenshot: true,
                                                video: option
                                            });
                                        }
                                    })
                                });
                            }
                        }
                        const suffix = path.split('.').pop();
                        let content = document.querySelector('.content');
                        switch (previewHandler.fileType(suffix)) {
                            case 'image':
                                let img = new Image();
                                img.style.maxWidth = '100%';
                                img.src = url;
                                let fancy = document.createElement('a');
                                fancy.setAttribute('data-fancybox', 'image');
                                fancy.href = img.src;
                                fancy.append(img);
                                content.innerHTML = '';
                                content.append(fancy);
                                break;
                            case 'audio':
                                let audio = new Audio();
                                audio.style.outline = 'none';
                                audio.preload = 'auto';
                                audio.controls = 'controls';
                                audio.style.width = '100%';
                                audio.src = url;
                                content.innerHTML = '';
                                content.append(audio);
                                break;
                            case 'video':
                                let video = document.createElement('div');
                                previewHandler.createDplayer(url, suffix, video);
                                content.innerHTML = '';
                                content.append(video);
                                break;
                            case 'text':
                                let pre = document.createElement('pre');
                                let code = document.createElement('code');
                                pre.append(code);
                                pre.style.background = 'rgb(245,245,245)';
                                pre.style['overflow-x'] = 'scroll';
                                pre.classList.add(suffix);
                                content.style['text-align'] = 'initial';
                                content.innerHTML = '';
                                content.append(pre);
                                sendRequest('GET', url, null, null, data => {
                                    code.textContent = data;
                                    if (size.indexOf(' B') >= 0 || size.indexOf(' KB') &&
                                        size.split(' ')[0] < 100
                                    ) {
                                        hljs.highlightBlock(pre);
                                    }
                                });
                                break;
                            case 'office':
                                const officeOnline = '//view.officeapps.live.com/op/view.aspx?src=' + encodeURIComponent(url);
                                let div = document.createElement('div');
                                div.style.lineHeight = '2em';
                                div.style.background = 'rgba(218, 215, 215, 0.21)';
                                div.style.webkitTapHighlightColor = 'rgba(0, 0, 0, 0)';
                                div.style.cursor = 'pointer';
                                div.innerHTML = '新窗口打开';
                                div.addEventListener('click', () => window.open(officeOnline));
                                content.innerHTML = '';
                                content.appendChild(div);
                                if (document.body.clientWidth >= 480) {
                                    let iframe = document.createElement('iframe');
                                    iframe.width = '100%';
                                    iframe.style.height = '41em';
                                    iframe.style.border = '0';
                                    iframe.src = officeOnline;
                                    content.appendChild(iframe);
                                }
                                break;
                            default:
                                content.style['text-align'] = 'center';
                                content.innerHTML = '该文件不支持预览';
                                break;
    
                        }
                        document.querySelector('.file-name').innerHTML = path;
                        document.querySelector('.btn.download').addEventListener('click',
                            () => location.href = url
                        );
                        document.querySelector('.btn.quote').addEventListener('click',
                            event => {
                                previewHandler.copyTextContent(null, window.api.url + '?file=' + encodeURI(path));
                                const btn = document.querySelector('.btn.quote');
                                btn.innerHTML = '已复制';
                                setTimeout(() => btn.innerHTML = '引用', 250);
                            }
                        );
                        document.querySelector('.btn.share').addEventListener('click',
                            event => {
                                const sharePath = () => {
                                    let arr = window.backFordwardCache.current.split('/');
                                    let r = '';
                                    for (let i = 1; i < arr.length; i++) {
                                        r += '/' + arr[i];
                                    }
                                    return r;
                                }
                                previewHandler.copyTextContent(null,
                                    window.location.origin +
                                    window.location.pathname +
                                    '?path=' + encodeURI(sharePath()));
                                const btn = document.querySelector('.btn.share');
                                btn.innerHTML = '已复制';
                                setTimeout(() => btn.innerHTML = '分享', 250);
                            }
                        );
                        switchRightDisplay('preview');
    
                        let start = null;
                        let right = document.querySelector('.right');
                        const scrollToBottom = (timestamp) => {
                            if (!start) start = timestamp;
                            let progress = timestamp - start;
                            let last = right.scrollTop;
                            right.scrollTo(0, right.scrollTop + 14);
                            if (right.scrollTop !== last && progress < 1000 * 2) {
                                window.requestAnimationFrame(scrollToBottom);
                            }
                        };
                        window.requestAnimationFrame(scrollToBottom);
                    });
                } else {
                    elem.addEventListener('click', event => {
                        fetchFileList(path);
                        switchBackForwardStatus(path);
                    });
                }
            }
    
            function addBackForwardListener() {
                document.getElementById('arrow-back').addEventListener('click', back);
                document.getElementById('arrow-forward').addEventListener('click', forward);
                document.querySelector('#main-page').addEventListener('click', () => {
                    fetchFileList(window.api.root);
                    switchBackForwardStatus(window.api.root);
                });
            }
    
            function switchRightDisplay(display) {
                if (display === 'preview') {
                    document.querySelector('.list-header').style.display = 'none';
                    document.querySelector('#file-list').style.display = 'none';
                    document.querySelector('.markdown-body').style.display = 'none';
                    document.querySelector('.password').style.display = 'none';
                    document.querySelector('.preview').style.display = 'initial'
                } else if (display === 'encrypted') {
                    document.querySelector('.list-header').style.display = 'none';
                    document.querySelector('#file-list').style.display = 'none';
                    document.querySelector('.markdown-body').style.display = 'none';
                    document.querySelector('.preview').style.display = 'none';
                    document.querySelector('.password').style.display = 'initial';
                    document.querySelector('#readme').innerHTML = '';
                    let content = document.querySelector('.preview .content');
                    if (content) {
                        document.querySelector('.preview .content').innerHTML = '';
                    }
                } else {
                    document.querySelector('.list-header').style.display = 'initial';
                    document.querySelector('#file-list').style.display = 'initial';
                    document.querySelector('.markdown-body').style.display = 'none'
                    document.querySelector('.preview').style.display = 'none';
                    document.querySelector('.password').style.display = 'none';
                    document.querySelector('#readme').innerHTML = '';
                    let content = document.querySelector('.preview .content');
                    if (content) {
                        document.querySelector('.preview .content').innerHTML = '';
                    }
                }
            }
    
            function switchBackForwardStatus(path) {
                if (path) {
                    window.backFordwardCache.deepest = path;
                }
                if (window.backFordwardCache.root !== window.backFordwardCache.current) {
                    window.backFordwardCache.backable = true;
                    document.getElementById('arrow-back').style.color = 'black';
                } else {
                    window.backFordwardCache.backable = false;
                    document.getElementById('arrow-back').style.color = 'rgb(218, 215, 215)';
                }
                if (window.backFordwardCache.deepest !== window.backFordwardCache.current) {
                    window.backFordwardCache.forwardable = true;
                    document.getElementById('arrow-forward').style.color = 'black';
                } else {
                    window.backFordwardCache.forwardable = false;
                    document.getElementById('arrow-forward').style.color = 'rgb(218, 215, 215)';
                }
            }
    
            function back() {
                if (!window.backFordwardCache.backable) {
                    return;
                }
                if (window.backFordwardCache.preview) {
                    fetchFileList(window.backFordwardCache.current);
                } else {
                    let former = (() => {
                        let formerEndIndex = window.backFordwardCache.current.lastIndexOf('/');
                        return window.backFordwardCache.current.substring(0, formerEndIndex);
                    })();
                    former = former || window.api.root;
                    fetchFileList(former);
                    switchBackForwardStatus();
                }
                // console.log(window.backFordwardCache);
            }
    
            function forward() {
                if (!window.backFordwardCache.forwardable) {
                    return
                }
                const current = window.backFordwardCache.current === window.api.root ? '' : window.backFordwardCache.current
                const subLength = current ? current.length : 0;
                const later = current + '/' +
                    window.backFordwardCache.deepest.substring(subLength).split('/')[1];
                fetchFileList(later);
                switchBackForwardStatus();
                // console.log(window.backFordwardCache);
            }
    
            async function preCache(files, level) {
                if (level > 2) return;
                files.files.forEach(file => {
                    const parent = files.parent === '/' ? '' : files.parent
                    const path = parent + '/' + file.name;
                    if (!file.url) {
                        // console.log('caching ' + path + ', level ' + level);
                        window.fileCache.set(path, true);
                        sendRequest(window.api.method,
                            window.api.url,
                            window.api.formatPayload(path),
                            window.api.headers,
                            data => {
                                const files = JSON.parse(data);
                                window.fileCache.set(path, files);
                                preCache(files, level + 1);
                            },
                            () => window.fileCache.set(path, false)
                        );
                    } else if (file.name.split('.').pop() === 'md') {
                        // console.log('caching ' + path + ', level ' + level);
                        window.fileCache.set(path, true);
                        sendRequest('GET', file.url, null, null, text => window.fileCache.set(path, text), () => window.fileCache.set(path, false));
                    }
                });
            }
    
            async function preCacheCheck(cache, path) {
                cache.files.forEach(file => {
                    const prefix = path === window.api.root ? '' : path;
                    const nextPath = prefix + '/' + file.name;
                    const pathCache = window.fileCache.get(nextPath);
                    if (!file.url) {
                        if (!pathCache && pathCache !== true) {
                            // console.log('inner caching ' + nextPath);
                            window.fileCache.set(nextPath, true);
                            sendRequest(window.api.method,
                                window.api.url,
                                window.api.formatPayload(nextPath),
                                window.api.headers,
                                data => {
                                    const files = JSON.parse(data);
                                    window.fileCache.set(nextPath, files);
                                    preCache(files, 0);
                                },
                                () => window.fileCache.set(nextPath, false)
                            );
                        }
                    } else if (file.name.split('.').pop() === 'md') {
                        if (!pathCache && pathCache !== true) {
                            // console.log('inner caching ' + nextPath);
                            window.fileCache.set(nextPath, true);
                            sendRequest('GET', file.url, null, null, text => window.fileCache.set(nextPath,
                                text), () => window.fileCache.set(nextPath,
                                    false));
                        }
                    }
                });
            }
    
            function fetchFileList(path) {
                // console.log('fetching ' + path);
                let loading = document.querySelector('.loading-wrapper');
                loading.style.display = 'initial';
                window.backFordwardCache.preview = false;
                window.backFordwardCache.current = path;
                let cache = window.fileCache.get(path);
                if (cache === true) {
                    let cacheWaitFileListFetch = setInterval(() => {
                        cache = window.fileCache.get(path);
                        if (typeof cache === 'object') {
                            renderPage(null, cache);
                            preCacheCheck(cache, path);
                            clearInterval(cacheWaitFileListFetch);
                        } else if (cache === false) {
                            clearInterval(cacheWaitFileListFetch);
                            loading.style.color = 'red';
                            loading.innerText = 'Failed!';
                            setTimeout(() => {
                                loading.style.display = 'none';
                                loading.style.color = 'white';
                                loading.innerText = 'Loading..';
                            }, 2000);
                        }
                    }, 100);
                } else if (cache) {
                    renderPage(null, cache);
                    preCacheCheck(cache, path);
                } else {
                    window.fileCache.set(path, true);
                    sendRequest(window.api.method,
                        window.api.url,
                        window.api.formatPayload(path),
                        window.api.headers,
                        renderPage
                    );
                }
            }
    
            document.addEventListener('DOMContentLoaded', () => {
                document.title = window.GLOBAL_CONFIG.SITE_NAME;
                document.querySelector('.site').textContent = window.GLOBAL_CONFIG.SITE_NAME;
                window.api = {
                    root: '/',
                    url: window.GLOBAL_CONFIG.SCF_GATEWAY,
                    method: 'POST',
                    formatPayload: (path, passwd) => {
                        return '?path=' + encodeURIComponent(path) +
                            '&encrypted=' + window.api.accessToken.encrypted +
                            '&plain=' + window.api.accessToken.plain +
                            '&passwd=' + passwd;
                    },
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                }
                window.backFordwardCache = {
                    root: window.api.root,
                    deepest: window.api.root,
                    current: window.api.root,
                    backable: false,
                    forwardable: false,
                    preview: false
                }
                window.fileCache = new Map();
                const initialPath = new URLSearchParams(window.location.search).get('path') || window.api.root;
                if (window.GLOBAL_CONFIG.IS_CF) {
                    window.api.accessToken = {
                        encrypted: '',
                        plain: ''
                    };
                    fetchFileList(initialPath);
                    addBackForwardListener();
                } else {
                    sendRequest(window.api.method,
                        window.api.url + '?accessToken',
                        null,
                        window.api.headers,
                        data => {
                            const accessToken = JSON.parse(data);
                            window.api.accessToken = {
                                encrypted: accessToken.encrypted,
                                plain: accessToken.plain
                            };
                            fetchFileList(initialPath);
                            addBackForwardListener();
                        }
                    );
                }
            });
        </script>
    </head>
    
    <body hidden="hidden">
        <template id="tree-node-wrapper-template">
            <div class="tree-node-wrapper">
                <div class="tree-node">
                    <ion-icon></ion-icon>
                    <ion-icon></ion-icon>
                    <div class="tree-node-name"></div>
                </div>
            </div>
        </template>
        <template id="file-wrapper-templete">
            <div class="row file-wrapper">
                <div class="file">
                    <ion-icon></ion-icon>
                    <span class="name"></span>
                    <span class="time"></span>
                    <span class="size"></span>
                </div>
            </div>
        </template>
        <div class="loading-wrapper">
            <div class="loading">Loading...</div>
        </div>
        <div class="header-wrapper">
            <div class="header">
                <ion-icon id="arrow-back" class="logo" name="arrow-back"></ion-icon>
                <ion-icon id="arrow-forward" class="logo" name="arrow-forward"></ion-icon>
                <ion-icon id="main-page" class="logo" name="folder"></ion-icon>
                <div class="nav">
                    <span id="path">
                    </span>
                </div>
                <span class="site" id="nav-site">ONEDRIVE</span>
            </div>
        </div>
        <div class="container">
            <div class="main">
                <div class="left">
                    <div id="tree-root">
                    </div>
                </div>
                <div class="right">
                    <div class="list-header">
                        <div class="row">
                            <div class="file">
                                <span class="name">ITEMS</span>
                                <span class="time">TIME</span>
                                <span class="size">SIZE</span>
                            </div>
                        </div>
                    </div>
                    <div id="file-list">
                    </div>
                    <div class="markdown-body">
                        <div id="readme">
                        </div>
                    </div>
                    <div class="preview">
                        <div class="info">
                            <div class="file-name"></div>
                            <div class="btn download">下载</div>
                            <div class="btn quote">引用</div>
                            <div class="btn share">分享</div>
                        </div>
                        <div class="content"></div>
                    </div>
                    <div class="password-wrapper">
                        <div class="password">
                            <input type="password">
                            <button>提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`
  }