import os

folder = "paddle-recommendations"
os.makedirs(folder, exist_ok=True)

budget_options = ['A', 'B', 'C']
skill_options = ['A', 'B', 'C']
play_style_options = ['A', 'B', 'C']
weight_options = ['A', 'B', 'C']
grip_size_options = ['A', 'B', 'C']

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paddle Recommendations</title>
    <link rel="stylesheet" href="homestyle.css">
</head>
<body>
    <div id="header-container"></div>
    <script src="headerjava.js"></script>

    <h1>Your Top 3 Paddle Recommendations</h1>
    <!-- Add your paddle recommendations here -->
</body>
</html>
"""

for budget in budget_options:
    for skill in skill_options:
        for play_style in play_style_options:
            for weight in weight_options:
                for grip_size in grip_size_options:
                    filename = f"{budget}{skill}{play_style}{weight}{grip_size}.html"
                    with open(os.path.join(folder, filename), 'w') as f:
                        f.write(template.format(filename=filename))
