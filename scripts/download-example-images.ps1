# Créer les dossiers nécessaires
$imageDir = "public\images"
New-Item -ItemType Directory -Force -Path $imageDir

# Liste des images à télécharger
$images = @{
    "restaurant-hero.jpg" = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"  # Restaurant ambiance
    "menuiserie-hero.jpg" = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80"  # Atelier menuiserie
}

# Télécharger les images
foreach ($image in $images.GetEnumerator()) {
    $output = Join-Path $imageDir $image.Key
    Write-Host "Téléchargement de $($image.Value) vers $output"
    Invoke-WebRequest -Uri $image.Value -OutFile $output
}
