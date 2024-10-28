/* 轮播按钮样式 */
.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    overflow: hidden;
}

.prev { left: -70px; }
.next { right: -70px; }

.btn-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        var(--accent-color),
        transparent
    );
    transition: transform 0.3s;
}

.carousel-btn:hover .btn-glow {
    transform: translateX(50%);
}

.arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-left: 3px solid var(--text-color);
    border-bottom: 3px solid var(--text-color);
}

.arrow.left { transform: translate(-30%, -50%) rotate(45deg); }
.arrow.right { transform: translate(-70%, -50%) rotate(-135deg); }

/* 照片信息框样式 */
.photo-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(0, 0, 0, 0.7);
    padding: 15px;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s;
    border: 1px solid var(--accent-color);
    box-shadow: 0 0 15px var(--glow-color);
}

.carousel-item:hover .photo-info {
    opacity: 1;
    transform: translateY(0);
}