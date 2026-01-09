function replaceImageHosts() {
    var host = location.host;
    console.log("running the script");
    document.querySelectorAll("img").forEach(img => {
        const rawSrc = img.getAttribute("src");
        if (!rawSrc) return;

        try {
            const imgurl = new URL(img.src);
            var imgSrcHost = imgurl.hostname;

            if (imgSrcHost !== host) {
                const newSrc = img.src.replace(imgSrcHost, host);
                img.src = newSrc;
                console.log("[replaced]", rawSrc, "→", newSrc);
            } else {
                console.log("[skipped] host is already", host)
            }
        } catch (e) {
            console.error("error in img url:". rawSrc)
        }
    });
}

replaceImageHosts();
