(function() {
    // 1. Define Menu Items
    const menuItems = [
        { name: 'Bối cảnh', path: 'Content01/Content01_1.html' },
        { name: 'Quy luật lượng chất', path: 'Content01/Content01_2.html' },
        { name: 'Phủ định của phủ định', path: 'Content03/Content03_1.html' },
        { name: 'Quy luật mâu thuẫn', path: 'Content02/Content02_0.html' },
        { name: 'Dẫn chứng', path: 'Content02/Content02_5.html' },
        { name: 'Kết luận bài học', path: 'Content04/Content04_0.html' },
        { name: 'Q&A', path: 'Content04/Content04_1.html' },
        { name: 'AI Usage', path: 'Content05/Content05_1.html' },
        { name: 'Reference', path: 'Content05/Content05_2.html' },
        { name: 'Cảm ơn', path: 'Content06/Content06_1.html' }
    ];

    // 2. Create Sidebar DOM
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    sidebar.id = 'main-sidebar';

    // 3. Add Hamburger Toggle with Label
    const toggle = document.createElement('div');
    toggle.className = 'sidebar-toggle';
    toggle.style.display = 'flex';
    toggle.style.alignItems = 'center';
    toggle.style.padding = '0 15px';
    toggle.innerHTML = `
        <div class="hamburger-lines" style="display: flex; flex-direction: column; gap: 5px; width: 25px; align-items: center; justify-content: center;">
            <span style="display: block; width: 25px; height: 3px; background: white; border-radius: 0px;"></span>
            <span style="display: block; width: 25px; height: 3px; background: white; border-radius: 0px;"></span>
            <span style="display: block; width: 25px; height: 3px; background: white; border-radius: 0px;"></span>
        </div>
        <span class="menu-label" style="font-family: 'Montserrat', sans-serif; font-weight: 700; margin-left: 20px; font-size: 1.1rem; opacity: 0; transition: opacity 0.3s ease; white-space: nowrap; color: white; display: inline-block;">DANH MỤC</span>
    `;
    toggle.title = 'Mở rộng/Thu gọn';
    sidebar.appendChild(toggle);

    // 4. Build Menu
    const menu = document.createElement('ul');
    menu.className = 'sidebar-menu';
    
    // Get current filename to highlight active item
    const currentPath = window.location.pathname;

    const menuMatch = {
        0: ['Content01_1'], // Bối cảnh
        1: ['Content01_2', 'Content01_3', 'Content01_4', 'Content01_5'], // Quy luật lượng chất
        2: ['Content03_1', 'Content03_2', 'Content03_3', 'Content03_4'], // Phủ định
        3: ['Content02_0', 'Content02_1', 'Content02_2', 'Content02_3', 'Content02_4'], // Mâu thuẫn
        4: ['Content02_5', 'Content02_6', 'Content02_7'], // Dẫn chứng
        5: ['Content04_0'], // Kết luận
        6: ['Content04_1', 'Content04_2', 'Content04_3', 'Content04_4'], // Q&A
        7: ['Content05_1'], // AI Usage
        8: ['Content05_2'], // Reference
        9: ['Content06_1']  // Cảm ơn
    };

    menuItems.forEach((item, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        // Adjust path based on current directory
        const targetPath = `../${item.path}`; 
        
        a.href = targetPath;
        a.className = 'sidebar-item';
        
        // Highlight logic (Exact match by sub-pages)
        const activeMatchArray = menuMatch[index];
        const isActive = activeMatchArray && activeMatchArray.some(keyword => currentPath.includes(keyword));
        
        if (isActive) {
            a.classList.add('active');
            a.innerHTML = `<div class="sidebar-num" style="display:inline-block; width:22px; font-weight:900; color:#ffffff; text-align:center; font-size:1.1rem; margin-right:6px;">${index + 1}</div> <span>${item.name}</span>`;
        } else {
            a.innerHTML = `<div class="sidebar-num" style="display:inline-block; width:22px; font-weight:900; color:var(--accent-blue); text-align:center; font-size:1.1rem; margin-right:6px;">${index + 1}</div> <span>${item.name}</span>`;
        }

        li.appendChild(a);
        menu.appendChild(li);
    });
    sidebar.appendChild(menu);

    // 6. Injection
    document.body.prepend(sidebar);
    
    // Adjust main-with-sidebar class to body or main container
    document.body.classList.add('main-with-sidebar');

    // 7. Event Listeners
    const menuLabel = sidebar.querySelector('.menu-label');

    toggle.addEventListener('click', () => {
        const expanded = sidebar.classList.toggle('expanded');
        if (menuLabel) menuLabel.style.opacity = expanded ? '1' : '0';
    });

    // Font Awesome Injection if not present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(fa);
    }

})();
