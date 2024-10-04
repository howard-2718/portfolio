import * as PIXI from 'pixi.js';

(async () =>
{
    const app = new PIXI.Application();

    await app.init({
        width: window.innerWidth,
        height: window.innerHeight,
        resizeTo: window,
        background: '#fdfdfd',
    });

    document.body.appendChild(app.canvas);

    const wave = new PIXI.Graphics();
    app.stage.addChild(wave);

    let timer = 0;

    function sineWave(x, amplitude, frequency, time) {
        return amplitude * Math.sin(frequency * x + time);
    }

    let wave_y = 0;

    app.ticker.add(() => {
        timer += 0.05;

        var path = window.location.pathname;
        var page = path.split("/").pop();

        if(page === "projects.html") {
            wave_y = app.screen.height / 2;
        }
        else {
            wave_y = app.screen.height - 100;
        }

        wave.clear();

        for (let i = 0; i < 5; i++ ) {
            wave.moveTo(0, wave_y + i * 2);

            for (let x = 0; x < app.screen.width; x++) {
                const y = wave_y + i * 2 + sineWave(x, 20 + i * 5, 0.02 + i * 0.01, timer);
                wave.lineTo(x, y);
            }
        }

        wave.stroke({ width: 1, color: '#101010' });
    });
})();