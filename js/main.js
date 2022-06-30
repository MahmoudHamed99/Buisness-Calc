let unlimited = document.querySelector(".unlimited"),
    lifetime = document.querySelector(".lifetime"),
    brand = document.querySelector(".br"),
    buisness = document.querySelector(".buisness");

let sum                 = 0,
    brex                = 0,
    stripe              = 0,
    amex                = 0,
    unlimitedRewards    = 0,
    lifetimeRewards     = 0;

// Get The Value Of Unlimited Rewards And Lifetime Rewards
document.querySelectorAll("input").forEach(el => {
    el.onchange = (e) => {
            sum += parseInt(e.target.value),
            brex                = Math.round(sum * 0.3),
            stripe              = Math.round(sum * 2.9),
            amex                = Math.round(sum * 1.3),
            unlimitedRewards    = Math.round(sum * 1.1),
            lifetimeRewards     = Math.round(sum * 1.2);
            unlimited.innerHTML = `$${unlimitedRewards}`;
            lifetime.innerHTML = `$${lifetimeRewards}`;
    };
});

// Get The Value Of Buisness Card
document.querySelectorAll("button").forEach(button => {
    button.onclick = (e) => {
        if (e.target.classList.contains("brex")) {
            brand.innerHTML = `$${brex}`;
            buisness.innerHTML = "brex";
        } else if (e.target.classList.contains("stripe")) {
            brand.innerHTML = `$${stripe}`;
            buisness.innerHTML = "stripe";
        } else if (e.target.classList.contains("amex")) {
            brand.innerHTML = `$${amex}`;
            buisness.innerHTML = "amex";
        }
    };
});

// Reset All The data
document.querySelector(".reset").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll("input").forEach(el => {
        sum                 = 0;
        brex                = 0;
        stripe              = 0;
        amex                = 0;
        unlimitedRewards    = 0;
        lifetimeRewards     = 0;
        el.value = "";
        unlimited.innerHTML = "";
        lifetime.innerHTML = "";
        brand.innerHTML = "";
        buisness.innerHTML = "";
    });
});