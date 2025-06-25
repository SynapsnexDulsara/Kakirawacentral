document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const container = document.getElementById('container');
    const terminal = document.getElementById('terminal');
    const startButton = document.getElementById('start');
    const nav = document.querySelector('nav');
    const bg = document.getElementById('bg');
    const mainTitle = document.querySelector('h1');
    const mainSubtitle = document.querySelector('p');
    const boxo = document.getElementById('boxo');
    const boxt = document.getElementById('boxt');

    if (!terminal.querySelector('p')) {
        const terminalText = document.createElement('p');
        terminal.appendChild(terminalText);
        
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        terminal.appendChild(cursor);
    }
    
    const terminalText = terminal.querySelector('p');
    const cursor = document.querySelector('.cursor');
    
    const sound = document.getElementById('sound');
    
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        terminal.style.display = 'block';

        if (sound) {
            sound.play().catch(e => console.log('Audio playback prevented:', e));
        }
        
        showTerminalText(() => {
            setTimeout(() => {
                container.style.display = 'none';
                container.style.color = '#ff00ff';
                nav.style.display = 'block';
                bg.style.display = 'block';
                typewriterEffect(mainTitle, 'SYNAPSENEX', 70);
                
                initializeAnimations();
            }, 1000);
        });
    });
    
    function showTerminalText(callback) {
        const terminalLines = [
            '> CHECKING FOR VIRUSES...',
            '> 999999999999999999 indected files found',
            '> Cannot quarentine WannaCry Ransomware...',
            '> 725 Bitcoin sent to hacker',
            '> SYSTEM FAILURE: REBOOT REQUIRED',
            '> Downloading latest SYNAPSNEX Versions...',
            '> SYSTEM REBOOTED',
            '> SYSTEM RECOVERED',
        ];
        
        let lineIndex = 0;
        let charIndex = 0;
        
        function typeTerminalLine() {
            if (lineIndex < terminalLines.length) {
                if (charIndex === 0) {
                    terminalText.innerHTML += (lineIndex > 0 ? '<br>' : '') + '<span class="line-' + lineIndex + '"></span>';
                }
                
                const currentLine = document.querySelector('.line-' + lineIndex);
                
                if (charIndex < terminalLines[lineIndex].length) {
                    currentLine.textContent += terminalLines[lineIndex].charAt(charIndex);
                    charIndex++;
                    
                    const typeSpeed = Math.random() * 30 + 20;
                    setTimeout(typeTerminalLine, typeSpeed);
                } else {
                    lineIndex++;
                    charIndex = 0;
                    
                    setTimeout(typeTerminalLine, 300);
                }
            } else {
                cursor.style.display = 'none';
                if (callback) callback();
            }
        }
        
        typeTerminalLine();
    }
    
    function typewriterEffect(element, text, speed = 50, callback) {
        element.textContent = '';
        element.style.opacity = '1';
        
        const tempCursor = document.createElement('span');
        tempCursor.className = 'cursor';
        element.appendChild(tempCursor);
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                tempCursor.insertAdjacentText('beforebegin', text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
                tempCursor.remove();
                if (callback) callback();
            }
        }, speed);
    }
    
    function typewriterParagraph(element, speed = 20) {
        const originalText = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < originalText.length) {
                element.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
    function initializeAnimations() {
        const swiper = new Swiper('.swiper', {
            effect: 'cards',
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to("#bg", {
            scrollTrigger: {
                scrub: true
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.15,
            ease: "none"
        });
        
        gsap.to("h1", {
            scrollTrigger: {
                trigger: "h1",
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: -80,
            opacity: 0.7,
            ease: "power1.inOut"
        });
        
        gsap.to(".boxo", {
            scrollTrigger: {
                trigger: ".boxo",
                scrub: 1,
                toggleActions: "play none none none"
            },
            opacity: 1,
            x: -150,
            duration: 1,
            ease: "power2.out"
        });
        gsap.to(".boxt", {
            scrollTrigger: {
                trigger: ".boxt",
                scrub: 1,
                toggleActions: "play none none none"
            },
            opacity: 1,
            x: 150,
            duration: 1,
            ease: "power2.out"
        });


        ScrollTrigger.batch(".boxo, .boxt", {
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power2.out",
                });
            },
            start: "top 85%"
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    color: '#ff00ff',
                    scale: 1.1,
                    duration: 0.3
                });
            });
            
            link.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    color: '#fff',
                    scale: 1,
                    duration: 0.3
                });
            });
        });
    }
});