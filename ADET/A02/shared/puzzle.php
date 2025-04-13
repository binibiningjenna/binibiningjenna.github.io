<h2 class="text-center mb-4 heading">Welcome to <span class="text-black">PUZZLE GAMES</span></h2>
<p class="text-center subheading mb-5 text-dark">
    Get ready to challenge your brain! Pick a puzzle below and start solving!
</p>

<!-- Container for puzzle games -->
<div id="puzzle-container"></div>

<script>
    var puzzles = [
        { name: 'Matching: Sharks', link: 'https://cdn1.edgedatg.com/tml/apps/dnow/games/games/game-ngk-matching/1.0.17/index.html' },
        { name: 'Puzzles: Photo Ark', link: 'https://cdn1.edgedatg.com/tml/apps/dnow/games/games/game-ngk-puzzles/1.0.13/index.html' },
        { name: 'Puzzles: Habitats', link: 'https://cdn1.edgedatg.com/tml/apps/dnow/games/games/game-ngk-puzzles/1.0.16/index.html' },
        { name: 'Crack the Code', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/2/crack-the-code/' },
        { name: 'Dung Beetle Derby', link: 'https://images.nationalgeographic.com/wpf/media-content/richmedia/1/1129/project/dung_beetle/index.html' }
    ];

    var container = document.getElementById('puzzle-container');

    for (var i = 0; i < puzzles.length; i++) {
        var puzzleHTML =
            '<div class="card shadow-lg border-0 rounded-4 mb-4">' +
            '<div class="card-body p-4">' +
            '<h5 class="card-title text-center fw-bold">' + puzzles[i].name + '</h5>' +
            '<div class="ratio ratio-16x9 rounded-4 overflow-hidden mt-3">' +
            '<iframe src="' + puzzles[i].link + '" allowfullscreen style="border: none;"></iframe>' +
            '</div>' +
            '</div>' +
            '</div>';

        container.innerHTML += puzzleHTML;
    }
</script>