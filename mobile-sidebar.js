// 移动端侧边栏菜单功能
(function() {
    'use strict';

    // 等待 DOM 加载完成
    document.addEventListener('DOMContentLoaded', function() {
        // 检查页面是否有侧边栏
        const sidebar = document.querySelector('.column.side');
        if (!sidebar) return; // 如果没有侧边栏，不执行

        // 创建汉堡菜单按钮
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'mobile-sidebar-overlay';
        
        // 添加到页面
        document.body.insertBefore(menuToggle, document.body.firstChild);
        document.body.appendChild(overlay);

        // 切换侧边栏显示
        function toggleSidebar() {
            sidebar.classList.toggle('mobile-active');
            overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('mobile-active') ? 'hidden' : '';
        }

        // 关闭侧边栏
        function closeSidebar() {
            sidebar.classList.remove('mobile-active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // 点击汉堡菜单按钮
        menuToggle.addEventListener('click', toggleSidebar);

        // 点击遮罩层关闭
        overlay.addEventListener('click', closeSidebar);

        // 点击侧边栏内的链接后自动关闭
        const sidebarLinks = sidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeSidebar);
        });

        // 窗口大小改变时，如果变成大屏幕，自动关闭侧边栏
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeSidebar();
            }
        });
    });
})();