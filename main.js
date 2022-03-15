// Day or Night Mode

const dayNightMode = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'rgb(147, 151, 156)';
    }
}

window.addEventListener('load', dayNightMode);