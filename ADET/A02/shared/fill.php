<h2 class="text-center mb-4 heading">Welcome to <span class="text-black">FILL-IN GAMES</span></h2>
<p class="text-center subheading mb-5 text-dark">
    Get ready to create the silliest stories ever! Pick a game below and start filling in those blanks!
</p>

<!-- Container Funny Fill-In games -->
<div id="fillin-container"></div>

<script>
    var fillIns = [
        { name: 'Abracadabra', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/0/748/project/funnyfillin/index.html' },
        { name: 'Stop, Thief!', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/0/759/project/funnyfillin/index.html' },
        { name: 'A Wild Space Walk', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/1/1065/project/funnyfillin/index.html' },
        { name: 'Farm Frenzy', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/0/926/project/funnyfillin/index.html' },
        { name: 'Postcard from Paradise', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/0/737/project/funnyfillin/index.html' }
    ];

    var container = document.getElementById('fillin-container');

    for (var i = 0; i < fillIns.length; i++) {
        var fillHTML =
            '<div class="card shadow-lg border-0 rounded-4 mb-4">' +
            '<div class="card-body p-4">' +
            '<h5 class="card-title text-center fw-bold">' + fillIns[i].name + '</h5>' +
            '<div class="ratio ratio-16x9 rounded-4 overflow-hidden mt-3">' +
            '<iframe src="' + fillIns[i].link + '" allowfullscreen style="border: none;"></iframe>' +
            '</div>' +
            '</div>' +
            '</div>';

        container.innerHTML += fillHTML;
    }
</script>