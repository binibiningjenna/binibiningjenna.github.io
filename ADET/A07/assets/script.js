var video = document.getElementById("video");
var snapBtn = document.getElementById("snap-btn");
var reshootBtn = document.getElementById("reshoot-btn");
var filter = document.getElementById("filter");
var timerSelect = document.getElementById("timer");
var countdownDisplay = document.getElementById("countdown-display");
var photoSlots = document.querySelectorAll(".photo-slot");
var photoCount = 0;

navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    video.srcObject = stream;

    filter.addEventListener("change", function () {
        video.style.filter = filter.value;
    });

    video.style.filter = filter.value;
});

function startCountdown() {
    if (photoCount >= 3) {
        snapBtn.disabled = true;
        return;
    }
    var delay = parseInt(timerSelect.value);
    if (delay === 0) {
        takeSnapshot();
        return;
    }

    snapBtn.disabled = true;
    var countdown = delay;
    countdownDisplay.textContent = countdown + " seconds...";

    var interval = setInterval(function () {
        countdown--;
        countdownDisplay.textContent = countdown + " seconds...";
        if (countdown === 0) {
            clearInterval(interval);
            countdownDisplay.textContent = "";
            takeSnapshot();
            if (photoCount < 3) snapBtn.disabled = false;
        }
    }, 1000);
}

function takeSnapshot() {
    if (video.videoWidth === 0 || video.videoHeight === 0) {
        alert("Webcam not ready yet. Please wait.");
        return;
    }
    if (photoCount >= 3) {
        snapBtn.disabled = true;
        return;
    }

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.filter = filter.value || "none";
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    var snapshot = canvas.toDataURL("image/png");

    for (var i = 0; i < photoSlots.length; i++) {
        if (!photoSlots[i].src || photoSlots[i].src === window.location.href) {
            photoSlots[i].src = snapshot;
            photoSlots[i].style.display = "block";
            break;
        }
    }

    photoCount++;
    if (photoCount >= 3) {
        snapBtn.disabled = true;
        snapBtn.style.background = "#ccc";
        reshootBtn.style.display = "inline-block";
    }
}

function reshootPhotos() {
    photoSlots.forEach(function (img) {
        img.src = "";
        img.style.display = "none";
    });
    photoCount = 0;
    snapBtn.disabled = false;
    snapBtn.style.background = "#165f67";
    snapBtn.style.color = "#fffbfb";
    reshootBtn.style.display = "none";
    video.style.filter = filter.value;
}

function downloadCard() {
    var filledPhotos = Array.from(photoSlots).filter(function (img) {
        return img.src && img.src !== "";
    });
    if (filledPhotos.length === 0) {
        alert("No photos to download yet!");
        return;
    }

    var logoSrc = "assets/img/jmarpix.png";
    var dateStr = new Date().toLocaleDateString();

    var cardW = 180;
    var photoH = 120;
    var photosNum = filledPhotos.length;
    var pad = 10;
    var photoSpacing = 8;
    var photoPadX = 10;
    var brandH = 40;
    var dateH = 20;

    var cardH = brandH + photosNum * photoH + (photosNum - 1) * photoSpacing + dateH + pad * 4;

    var canvas = document.createElement("canvas");
    canvas.width = cardW;
    canvas.height = cardH;
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, cardW, cardH);

    var logo = new Image();
    logo.src = logoSrc;

    logo.onload = function () {
        var logoW = cardW * 0.6;
        var logoH = brandH * 0.8;
        var logoX = (cardW - logoW) / 2;
        var logoY = pad;

        ctx.drawImage(logo, logoX, logoY, logoW, logoH);

        filledPhotos.forEach(function (img, idx) {
            var image = new Image();
            image.crossOrigin = "anonymous";
            image.src = img.src;
            image.onload = function () {
                var slotY = brandH + pad * 2 + idx * (photoH + photoSpacing);
                var availableW = cardW - photoPadX * 2;
                var availableH = photoH;
                var hRatio = availableW / image.width;
                var vRatio = availableH / image.height;
                var ratio = Math.max(hRatio, vRatio);
                var newW = image.width * ratio;
                var newH = image.height * ratio;
                var x = photoPadX + (availableW - newW) / 2;
                var y = slotY + (photoH - newH) / 2;

                ctx.drawImage(image, x, y, newW, newH);

                if (idx === filledPhotos.length - 1) {
                    ctx.fillStyle = "#555";
                    ctx.font = "14px 'Lexend Exa', sans-serif";
                    ctx.textAlign = "center";
                    ctx.fillText(dateStr, cardW / 2, cardH - pad);

                    setTimeout(function () {
                        var link = document.createElement("a");
                        link.download = "JMARPIX.png";
                        link.href = canvas.toDataURL("image/png");
                        link.click();
                    }, 500);
                }
            };
        });
    };
}
