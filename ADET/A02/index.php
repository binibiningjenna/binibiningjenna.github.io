<?php
$page = "puzzle";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "puzzle":
            $page = "puzzle";
            break;
        case "fill":
            $page = "fill";
            break;
        case "action":
            $page = "action";
            break;
        default:
            header("Location: ?page=puzzle");
            break;
    }
} else {
    header("Location: ?page=puzzle");
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Funzy Land</title>
    <link rel="icon" href="img/logo.jpg" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

    <style>
        body {
            background-color: #55b857;
            font-family: 'Fredoka', sans-serif;
            color: #ffffff;
        }

        .heading {
            font-family: "Comic Sans MS", sans-serif;
            font-weight: bolder;
            text-transform: uppercase;
            font-size: 3rem;
        }

        .subheading {
            font-family: "Fredoka", sans-serif;
            font-size: 1.4rem;
        }

        .game-button {
            font-family: "Comic Sans MS", sans-serif;
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .card {
            background-color: #fdfdfd;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .card-title {
            color: #125411;
        }

        #backToTopBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999;
            width: 35px;
            height: 35px;
            font-size: 18px;
            border: none;
            background-color: #ffffff;
            color: #000000;
            cursor: pointer;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            opacity: 0.8;
            transition: all 0.3s ease;
        }

        #backToTopBtn:hover {
            background-color: #000000;
            color: #ffffff;
            opacity: 1;
        }

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #55b857;
        }

        ::-webkit-scrollbar-thumb {
            background: #fdfdfd;
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #9af6a2;
        }
    </style>
</head>

<body>
    <!-- Navigation Bar -->
    <header data-bs-theme="dark">
        <div class="text-bg-dark collapse" id="navbarHeader" style="">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <div class="heading">Welcome to FunzyLand!</div>
                        <p class="text-body-secondary">
                            A playful world where puzzles, action, and silly stories come to life! Whether you're
                            quick-thinking, puzzle-loving, or just here for laughs — there's something fun waiting for
                            you.

                            <li class="text-body-secondary">
                                <b>Puzzle Pages</b> – Test your brain with match-ups and riddles.
                            </li>
                            <li class="text-body-secondary">
                                <b>Action Games</b> – Jump into mini adventures full of color!
                            </li>
                            <li class="text-body-secondary">
                                <b>Funny Fill-ins</b> – Make the wackiest stories with your words!
                            </li>
                        </p>
                        <p class="text-body-secondary">Ready to think, play, and laugh? Let the fun begin in
                            <b>FunzyLand!</b>
                        </p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <div class="heading">FUNZYLAND</div>
                        <ul class="list-unstyled">
                            <li><a href="?page=puzzle" class="text-white">PUZZLE</a></li>
                            <li><a href="?page=action" class="text-white">ACTION</a></li>
                            <li><a href="?page=fill" class="text-white">FUNNY FILL-IN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark shadow-sm" style="background-color:#2e71de;">
            <div class="container">
                <a href="?page=puzzle" class="navbar-brand d-flex align-items-center subheading">
                    <strong>FUNZY LAND</strong>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>

    <div class="container-fluid" style="position: relative; width: 100%; overflow: hidden;">
        <div class="row">
            <!-- Background | Game Mode Selection-->
            <div class="col" style="height: 125vh;">
                <iframe style="pointer-events: none; margin-left: 50%; transform: translateX(-50%); margin-top: -2rem;"
                    width="4000px" height="100%"" src="
                    https://www.youtube.com/embed/NHfFlmHH41w?si=Gu27_Ur8GZGlG63_&autoplay=1&mute=1&controls=0&rel=0&disablekb=1&loop=1&playlist=NHfFlmHH41w"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
                <div class="d-flex justify-content-center align-items-center"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100vh;">
                    <div class="text-center" style="margin-top: 100px;">
                        <div class="heading"
                            style="color: #edece5;text-shadow: 3px 3px 6px #000000; font-size: 3.5rem;margin-bottom: 20px;">
                            FUNZY LAND
                        </div>
                        <div class="subheading" style="color:#000000;font-size: 1.2rem;margin-bottom: 20px;">
                            Choose a game mode to get started!
                        </div>
                        <div class="d-flex justify-content-center gap-3 flex-wrap">
                            <a href="?page=fill" type="button" class="game-button btn btn-warning px-4 py-2">FILL-IN</a>
                            <a href="?page=puzzle" type="button"
                                class="game-button btn btn-primary px-4 py-2">PUZZLE</a>
                            <a href="?page=action" type="button"
                                class="game-button btn btn-success px-4 py-2">ACTION</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Game Pages Content Area | Fill-in, Puzzle, and Action -->
            <div class="col-12 col-md-10 col-lg-8 mx-auto py-5">
                <?php include("shared/" . $page . ".php"); ?>
            </div>
        </div>
    </div>

    <!-- Back to Top Button -->
    <button onclick="topFunction()" id="backToTopBtn" title="Go to top">↑</button>

    <script>
        window.onscroll = function () {
            const btn = document.getElementById("backToTopBtn");
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        };

        function topFunction() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>