<h2 class="text-center mb-4 heading">Welcome to <span class="text-black">ACTION GAMES</span></h2>
<p class="text-center subheading mb-5 text-dark">
    Get ready for fast-paced challenges! Choose a game and dive into the action!
</p>

<!-- Container for action games -->
<div id="action-container"></div>

<script>
    var actions = [
        { name: 'Zeus the Mighty', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/2/zeus-the-mighty-beta4/' },
        { name: 'Beaver Badminton', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/1/1173/project/dist/index.html' },
        { name: 'Stack Time', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/0/620/project/stackables/stackables.html' },
        { name: 'Recycle Roundup', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/1/1143/project/dist/index.html' },
        { name: 'Krill Smackdown', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/1/1172/project/krill-smackdown-full-0629/index.html' }
    ];

    var container = document.getElementById('action-container');
    for (var i = 0; i < actions.length; i++) {
        var actionHTML =
            '<div class="card shadow-lg border-0 rounded-4 mb-4">' +
            '<div class="card-body p-4">' +
            '<h5 class="card-title text-center fw-bold">' + actions[i].name + '</h5>' +
            '<div class="ratio ratio-16x9 rounded-4 overflow-hidden mt-3">' +
            '<iframe src="' + actions[i].link + '" allowfullscreen style="border: none;"></iframe>' +
            '</div>' +
            '</div>' +
            '</div>';
        container.innerHTML += actionHTML;
    }
</script>