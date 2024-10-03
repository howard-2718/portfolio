import * as PIXI from 'pixi.js';

(async () =>
{
    const app = new PIXI.Application();

    await app.init({
        width: window.innerWidth,
        height: window.innerHeight,
        background: '#fdfdfd',
    });

    document.body.appendChild(app.canvas);

    const wave = new PIXI.Graphics();
    app.stage.addChild(wave);

    let timer = 0;

    function sineWave(x, amplitude, frequency, time) {
        return amplitude * Math.sin(frequency * x + time);
    }

    app.ticker.add(() => {
        timer += 0.05;

        wave.clear();

        for (let i = 0; i < 5; i++ ) {
            wave.moveTo(0, app.screen.height - 100 + i * 2);

            for (let x = 0; x < app.screen.width; x++) {
                const y = app.screen.height - 100 + i * 2 + sineWave(x, 20 + i * 5, 0.02 + i * 0.01, timer);
                wave.lineTo(x, y);
            }
        }

        wave.stroke({ width: 1, color: '#101010' });
    });

    window.addEventListener('resize', () => {
        app.screen.resize(window.innerWidth, window.innerHeight);
    });
})();