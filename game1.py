print("Hello world")
import pygame

# Initialize Pygame
pygame.init()

# Create the game window
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("My Game")

# Load images and sounds
background_image = pygame.image.load("background.jpg")
player_image = pygame.image.load("player.png")
bullet_sound = pygame.mixer.Sound("bullet.wav")

# Define game variables
player_x = 400
player_y = 500
player_speed = 5
bullet_x = player_x
bullet_y = player_y
bullet_speed = 10
bullet_fired = False

# Game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                bullet_fired = True
                bullet_x = player_x
                bullet_y = player_y

    # Handle player movement
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and player_x > 0:
        player_x -= player_speed
    elif keys[pygame.K_RIGHT] and player_x < screen_width - player_image.get_width():
        player_x += player_speed

    # Handle bullet movement
    if bullet_fired:
        bullet_y -= bullet_speed
        if bullet_y < 0:
            bullet_fired = False

    # Draw graphics
    screen.blit(background_image, (0, 0))
    screen.blit(player_image, (player_x, player_y))
    if bullet_fired:
        pygame.draw.circle(screen, (255, 0, 0), (bullet_x, bullet_y), 5)
    pygame.display.update()

# Quit Pygame
pygame.quit()
