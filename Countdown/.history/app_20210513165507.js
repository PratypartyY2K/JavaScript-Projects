const countdown = () => {
    const countDate = new Date('May 17, 2021 00:00:00').getTime();
    const now = new Date().getTime;
    const gap  = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = gap/day;
    console.log(textDay)
};

countdown();