var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.addEventListener('DOMContentLoaded', function() {
    const snowContainer = document.getElementById('snow-container');
    const maxSnowflakes = 200; 
    const snowflakes = [];
    const snowflakeFadeDuration = 2000;

    function createSnowflake(x, y) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${x}px`;
        snowflake.style.top = `${y}px`;
        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
            snowflakes.shift();
        }, snowflakeFadeDuration / 4);
    }

    document.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        createSnowflake(mouseX, mouseY);
    });

    function generateSnowflakes() {
        if (snowflakes.length < maxSnowflakes) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createSnowflake(x, y);
        }
    }

    setInterval(generateSnowflakes, 100);

    function removeSnowflakesAroundMouse() {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const range = 100; 
        
        for (let i = snowflakes.length - 1; i >= 0; i--) {
            const snowflakeX = parseInt(snowflakes[i].style.left);
            const snowflakeY = parseInt(snowflakes[i].style.top);
            const distance = Math.sqrt(Math.pow(mouseX - snowflakeX, 2) + Math.pow(mouseY - snowflakeY, 2));
            
            if (distance < range) {
                snowflakes[i].remove();
                snowflakes.splice(i, 1);
            }
        }
    }

    document.addEventListener('mousemove', removeSnowflakesAroundMouse);

    document.addEventListener('click', function() {
        const audio = document.getElementById('background-music');
        audio.play();
        document.removeEventListener('click', arguments.callee);
    });
    
    

});

function toggleWindow() {
    var window = document.getElementById('window');
    window.style.display = (window.style.display === 'none') ? 'block' : 'none';
}



}
/*
     FILE ARCHIVED ON 21:08:31 Mar 03, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:52:34 Mar 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.195
  exclusion.robots.policy: 0.178
  cdx.remote: 0.225
  esindex: 0.012
  LoadShardBlock: 210.596 (6)
  PetaboxLoader3.resolve: 108.573 (2)
  PetaboxLoader3.datanode: 145.624 (7)
  load_resource: 93.862
*/