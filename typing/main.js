var txt = document.getElementById('typing');

var typewriter = new Typewriter(txt, {
    //loop: true,
    cursor: '_',
    delay: 80
});

var pauseTime = 500;

// Sửa chữ đi. xong ib fb t

typewriter.changeDeleteSpeed(10)
    .typeString('ngày hôm nay là ngày đặc biệt với Cow')
    .pauseFor(pauseTime)
    .deleteChars(32)
    .pauseFor(400)
    .typeString('17 tháng 10 năm 2020')
    .pauseFor(pauseTime)
    .deleteAll(19)
    .typeString('ngày mà em lọt lòng chui ra thế giới này..')
    .pauseFor(pauseTime)
    .deleteAll()
    .typeString('tận hưởng trọn vẹn ngày hôm nay nhá ! ')
    .pauseFor(pauseTime)
    .deleteAll()
    .typeString('luôn luôn xinh đẹp và hạnh phúc <3')
    .pauseFor(pauseTime)
    .deleteAll()
    .typeString('from Nhím with ȴᴑⱴɘ ❤️')
    .pauseFor(200)
    .callFunction(function happy(){    
        window.location.replace('../giftbox/index.html');
    })
    .start()
    
     
    
    
