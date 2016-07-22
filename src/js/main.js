document.addEventListener('DOMContentLoaded', function() {
    pointerPos();
    var view = inView();
    var examples = document.querySelectorAll('.example');
    window.addEventListener('resize', pointerPos);
    window.addEventListener('scroll', scrollCheck.bind(null, examples, view));

    Velocity(
        document.querySelector('.main-text-wrapper').childNodes, 
        "transition.slideDownIn", 
        { duration: 1000, stagger: 1000 }
    );
    Velocity(
        document.querySelector('.sub-text-wrapper').childNodes, 
        "transition.slideLeftIn", 
        { delay: 2000, duration: 500, stagger: 250 }
    ); 
});

function inView() {
    var example_1 = false;
    var example_2 = false;
    var example_3 = false;

    return {
        set: function(el) {
            switch (el) {
                case 1:
                    example_1 = true;
                    break;
                case 2:
                    example_2 = true;
                    break;
                case 3:
                    example_3 = true;
                    break;
                default:
                    console.log("set broke")
            }
        },

        get: function(el) {
            switch (el) {
                case 1:
                    return example_1;
                case 2:
                    return example_2;
                case 3:
                    return example_3;
                default:
                    console.log('get broke');
            }
        }
    }
}

function pointerPos() {
    var wrapper = document.querySelector('.header-wrapper');
    var wrapHeight = wrapper.offsetHeight;
    var wrapTop = wrapper.offsetTop;

    document.querySelector('.pointer').style.marginTop = (wrapHeight - 15 + (wrapTop / 2)) + "px";
}

function scrollCheck(examples, view) {


    if (!view.get(1) && window.scrollY >= (examples[0].offsetTop - examples[0].offsetHeight / 2 )) {
        view.set(1);
        examples[0].style.width = "100%";
        Velocity(
            examples[0].children, 
            "fadeIn", 
            { duration: 1000, delay: 1000 }
        );
    }
    if (!view.get(2) && window.scrollY > (examples[1].offsetTop - examples[1].offsetHeight)) {
        view.set(2);
        examples[1].style.width = "100%";
        Velocity(
            examples[1].children, 
            "fadeIn", 
            { duration: 1000, delay: 1000 }
        );
    }
    if (!view.get(3) && window.scrollY > (examples[2].offsetTop - examples[2].offsetHeight)) {
        view.set(3);
        examples[2].style.width = "100%";
        Velocity(
            examples[2].children, 
            "fadeIn", 
            { duration: 1000, delay: 1000 }
        );
    }
}