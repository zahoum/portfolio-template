import { useEffect, useRef } from 'react';
import './CyberBackground.css';

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // إعدادات الخلفية
    const particleCount = 60; // عدد النقط
    const connectionDistance = 150; // المسافة اللي كيتواصلو فيها
    const mouseDistance = 200;

    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // سرعة الحركة
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // رسم النقط و الحركة
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // إلا خرجات من الشاشة، ترجع من الجهة الأخرى
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(239, 68, 68, 0.5)'; // لون النقط (أحمر)
        ctx.fill();
      });

      // رسم الخطوط بين النقط
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // رسم خطوط مع الماوس (تفاعل)
        if (mouse.x != null && mouse.y != null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${1 - distance / mouseDistance})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeave);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cyber-background"></canvas>;
}