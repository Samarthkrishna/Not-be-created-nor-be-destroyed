// Psychedelic Reality Bender - A truly unique and never-before-seen experience
// This code generates unique perceptual patterns that have never existed before

document.addEventListener('DOMContentLoaded', function() {
    // Set timestamp
    document.getElementById('timestamp').textContent = new Date().toLocaleString();
    
    // Get DOM elements
    const canvas = document.getElementById('perception-canvas');
    const ctx = canvas.getContext('2d');
    const consciousnessSlider = document.getElementById('consciousness');
    const distortionSlider = document.getElementById('distortion');
    const frequencySlider = document.getElementById('frequency');
    const bendRealityBtn = document.getElementById('bend-reality');
    const resetRealityBtn = document.getElementById('reset-reality');
    const surpriseModeBtn = document.getElementById('surprise-mode');
    const integrityValue = document.getElementById('integrity-value');
    const anomaliesValue = document.getElementById('anomalies-value');
    const shiftValue = document.getElementById('shift-value');
    const realityField = document.getElementById('reality-field');
    const surpriseContainer = document.getElementById('surprise-container');
    const realitySound = document.getElementById('reality-sound');
    
    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Unique session ID based on timestamp and random factors
    const sessionId = Date.now() + Math.random().toString(36).substr(2, 9);
    console.log(`Reality Bender Session: ${sessionId}`);
    
    // Reality state
    let realityState = {
        consciousness: 50,
        distortion: 30,
        frequency: 20,
        time: 0,
        isBending: false,
        anomalies: 0,
        shift: 1.0,
        integrity: 100,
        particles: [],
        surpriseActive: false,
        uniqueSeed: Math.random() * 10000
    };
    
    // Generate unique particles
    function generateParticles(count) {
        const particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 1,
                speedX: (Math.random() - 0.5) * 4,
                speedY: (Math.random() - 0.5) * 4,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`,
                life: Math.random() * 100 + 50,
                trail: []
            });
        }
        return particles;
    }
    
    // Initialize particles
    realityState.particles = generateParticles(100);
    
    // Update reality stats
    function updateStats() {
        integrityValue.textContent = `${Math.max(0, Math.min(100, realityState.integrity))}%`;
        anomaliesValue.textContent = Math.floor(realityState.anomalies);
        shiftValue.textContent = `${realityState.shift.toFixed(1)}x`;
    }
    
    // Generate unique pattern algorithm (never seen before)
    function drawUniquePattern() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Clear with a fading effect
        ctx.fillStyle = 'rgba(5, 5, 16, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw reality distortion waves
        const waveCount = Math.floor(realityState.consciousness / 10) + 5;
        const waveAmplitude = realityState.distortion * 2;
        
        for (let i = 0; i < waveCount; i++) {
            const angle = (i / waveCount) * Math.PI * 2 + realityState.time * 0.01;
            const radius = 50 + i * 20 + Math.sin(realityState.time * 0.02 + i) * waveAmplitude;
            
            // Each wave has unique properties based on session ID
            const hue = (realityState.uniqueSeed + i * 50 + realityState.time * 2) % 360;
            
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 0.3)`;
            ctx.lineWidth = 2 + Math.sin(realityState.time * 0.05 + i) * 2;
            ctx.stroke();
            
            // Add distortion points along the wave
            const points = 20;
            for (let j = 0; j < points; j++) {
                const pointAngle = (j / points) * Math.PI * 2 + realityState.time * 0.01;
                const pointRadius = radius + Math.sin(realityState.time * 0.03 + j * 0.5) * 10;
                const pointX = centerX + Math.cos(pointAngle) * pointRadius;
                const pointY = centerY + Math.sin(pointAngle) * pointRadius;
                
                ctx.beginPath();
                ctx.arc(pointX, pointY, 2 + Math.sin(realityState.time * 0.1 + i + j) * 2, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${(hue + 60) % 360}, 100%, 70%, 0.7)`;
                ctx.fill();
            }
        }
        
        // Draw consciousness connection lines
        if (realityState.consciousness > 30) {
            ctx.beginPath();
            for (let i = 0; i < realityState.particles.length; i += 2) {
                const p1 = realityState.particles[i];
                const p2 = realityState.particles[(i + 1) % realityState.particles.length];
                
                const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
                if (dist < 150) {
                    const alpha = Math.max(0, 1 - dist / 150) * (realityState.consciousness / 100);
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 255, 234, ${alpha * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        // Update and draw particles
        realityState.particles.forEach(particle => {
            // Update position with distortion
            particle.x += particle.speedX * realityState.shift;
            particle.y += particle.speedY * realityState.shift;
            particle.life -= 0.5;
            
            // Keep trail of positions
            particle.trail.push({x: particle.x, y: particle.y});
            if (particle.trail.length > 10) {
                particle.trail.shift();
            }
            
            // Bounce off edges with reality distortion
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1 * (0.9 + Math.random() * 0.2);
                realityState.anomalies += 0.1;
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1 * (0.9 + Math.random() * 0.2);
                realityState.anomalies += 0.1;
            }
            
            // Draw trail
            particle.trail.forEach((pos, index) => {
                const alpha = index / particle.trail.length * 0.5;
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, particle.size * (index / particle.trail.length), 0, Math.PI * 2);
                ctx.fillStyle = `${particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla')}`;
                ctx.fill();
            });
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Respawn if dead
            if (particle.life <= 0) {
                Object.assign(particle, {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    life: Math.random() * 100 + 50,
                    trail: []
                });
            }
        });
        
        // Draw consciousness focal point
        if (realityState.isBending) {
            const pulseSize = 50 + Math.sin(realityState.time * 0.1) * 20;
            ctx.beginPath();
            ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize);
            gradient.addColorStop(0, 'rgba(0, 255, 234, 0.8)');
            gradient.addColorStop(1, 'rgba(0, 255, 234, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        
        // Update reality integrity
        if (realityState.isBending) {
            realityState.integrity -= 0.1;
            realityState.shift += 0.01;
        } else {
            realityState.integrity = Math.min(100, realityState.integrity + 0.05);
            realityState.shift = Math.max(1, realityState.shift - 0.005);
        }
        
        updateStats();
        realityState.time += realityState.frequency * 0.1;
    }
    
    // Animation loop
    function animate() {
        drawUniquePattern();
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Event listeners for controls
    consciousnessSlider.addEventListener('input', function() {
        realityState.consciousness = parseInt(this.value);
        // Add more particles based on consciousness
        const targetParticles = Math.floor(realityState.consciousness * 2);
        if (targetParticles > realityState.particles.length) {
            const newParticles = generateParticles(targetParticles - realityState.particles.length);
            realityState.particles.push(...newParticles);
        }
    });
    
    distortionSlider.addEventListener('input', function() {
        realityState.distortion = parseInt(this.value);
    });
    
    frequencySlider.addEventListener('input', function() {
        realityState.frequency = parseInt(this.value);
    });
    
    bendRealityBtn.addEventListener('click', function() {
        realityState.isBending = !realityState.isBending;
        
        if (realityState.isBending) {
            this.innerHTML = '<i class="fas fa-pause"></i> Stabilize Reality';
            this.classList.add('btn-danger');
            this.classList.remove('btn-primary');
            
            // Start audio
            realitySound.volume = 0.3;
            realitySound.play().catch(e => console.log("Audio play failed:", e));
            
            // Create distortion effect on background
            realityField.style.background = 
                `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(0, 255, 234, 0.3) 0%, transparent 50%),
                 linear-gradient(45deg, #0a0a0a 0%, #111 100%)`;
        } else {
            this.innerHTML = '<i class="fas fa-cogs"></i> Bend Reality';
            this.classList.remove('btn-danger');
            this.classList.add('btn-primary');
            
            // Stop audio
            realitySound.pause();
            realitySound.currentTime = 0;
            
            // Reset background
            realityField.style.background = 
                `radial-gradient(circle at 20% 30%, rgba(120, 10, 180, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 80% 70%, rgba(10, 150, 220, 0.1) 0%, transparent 50%),
                 linear-gradient(45deg, #0a0a0a 0%, #111 100%)`;
        }
    });
    
    resetRealityBtn.addEventListener('click', function() {
        realityState.isBending = false;
        realityState.consciousness = 50;
        realityState.distortion = 30;
        realityState.frequency = 20;
        realityState.anomalies = 0;
        realityState.shift = 1.0;
        realityState.integrity = 100;
        
        consciousnessSlider.value = 50;
        distortionSlider.value = 30;
        frequencySlider.value = 20;
        
        bendRealityBtn.innerHTML = '<i class="fas fa-cogs"></i> Bend Reality';
        bendRealityBtn.classList.remove('btn-danger');
        bendRealityBtn.classList.add('btn-primary');
        
        realitySound.pause();
        realitySound.currentTime = 0;
        
        // Generate new unique particles
        realityState.particles = generateParticles(100);
        
        updateStats();
    });
    
    // MAXIMUM SURPRISE mode
    surpriseModeBtn.addEventListener('click', function() {
        if (realityState.surpriseActive) return;
        
        realityState.surpriseActive = true;
        this.disabled = true;
        this.innerHTML = '<i class="fas fa-radiation"></i> REALITY BREACH DETECTED';
        
        // Extreme reality distortion
        realityState.isBending = true;
        realityState.consciousness = 100;
        realityState.distortion = 100;
        realityState.frequency = 60;
        realityState.shift = 5.0;
        
        consciousnessSlider.value = 100;
        distortionSlider.value = 100;
        frequencySlider.value = 60;
        
        // Create surprise elements
        surpriseContainer.classList.remove('hidden');
        surpriseContainer.innerHTML = '';
        
        // Add multiple surprise elements
        for (let i = 0; i < 20; i++) {
            const surpriseElement = document.createElement('div');
            surpriseElement.className = 'surprise-element';
            surpriseElement.style.position = 'fixed';
            surpriseElement.style.left = `${Math.random() * 100}%`;
            surpriseElement.style.top = `${Math.random() * 100}%`;
            surpriseElement.style.width = `${Math.random() * 100 + 50}px`;
            surpriseElement.style.height = `${Math.random() * 100 + 50}px`;
            surpriseElement.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            surpriseElement.style.borderRadius = '50%';
            surpriseElement.style.opacity = '0.7';
            surpriseElement.style.zIndex = '9999';
            surpriseElement.style.pointerEvents = 'none';
            surpriseElement.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
            
            // Add keyframes for floating animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); }
                    50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
                    75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); }
                }
            `;
            document.head.appendChild(style);
            
            surpriseContainer.appendChild(surpriseElement);
        }
        
        // Add text surprise
        const surpriseText = document.createElement('div');
        surpriseText.textContent = 'REALITY UNSTABLE';
        surpriseText.style.position = 'fixed';
        surpriseText.style.top = '50%';
        surpriseText.style.left = '50%';
        surpriseText.style.transform = 'translate(-50%, -50%)';
        surpriseText.style.fontFamily = "'Orbitron', sans-serif";
        surpriseText.style.fontSize = '5rem';
        surpriseText.style.color = '#ff0000';
        surpriseText.style.textShadow = '0 0 30px #ff0000';
        surpriseText.style.zIndex = '10000';
        surpriseText.style.animation = 'pulse 0.5s infinite';
        surpriseContainer.appendChild(surpriseText);
        
        // Play surprise sound
        const surpriseAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3');
        surpriseAudio.volume = 0.5;
        surpriseAudio.play();
        
        // Auto-reset after 10 seconds
        setTimeout(() => {
            surpriseContainer.classList.add('hidden');
            surpriseContainer.innerHTML = '';
            realityState.surpriseActive = false;
            surpriseModeBtn.disabled = false;
            surpriseModeBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> MAXIMUM SURPRISE';
            
            // Trigger reset
            resetRealityBtn.click();
        }, 10000);
    });
    
    // Initialize stats
    updateStats();
    
    // Create a unique signature in console
    console.log(`
    ╔══════════════════════════════════════════════════════════╗
    ║                                                            ║
    ║   PSYCHEDELIC REALITY BENDER v1.0                         ║
    ║   This experience is mathematically unique:               ║
    ║   Session ID: ${sessionId}                                ║
    ║                                                            ║
    ║   This specific combination of visual algorithms,         ║
    ║   interaction patterns, and temporal effects has          ║
    ║   never existed before in the universe and                ║
    ║   will never exist again in this exact form.              ║
    ║                                                            ║
    ║   Created for someone truly special.                      ║
    ║                                                            ║
    ╚══════════════════════════════════════════════════════════╝
    `);
});
