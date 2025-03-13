# Créer le dossier pour les images si nécessaire
$imageDir = "public\images\landing-page-express"
New-Item -ItemType Directory -Force -Path $imageDir

# Liste des images à générer pour le restaurant
$restaurantImages = @(
    "restaurant-hero",
    "entree",
    "plat",
    "dessert"
)

# Liste des images à générer pour la menuiserie
$menuiserieImages = @(
    "menuiserie-hero",
    "menuiserie-custom",
    "menuiserie-restoration",
    "menuiserie-interior",
    "realisation-1",
    "realisation-2",
    "realisation-3",
    "realisation-4",
    "certification-1",
    "certification-2"
)

# Télécharger les images depuis Unsplash avec des thèmes appropriés
$restaurantUrls = @(
    "https://source.unsplash.com/800x600/?french,restaurant",
    "https://source.unsplash.com/800x600/?appetizer",
    "https://source.unsplash.com/800x600/?main,course",
    "https://source.unsplash.com/800x600/?dessert"
)

$menuiserieUrls = @(
    "https://source.unsplash.com/800x600/?woodworking,workshop",
    "https://source.unsplash.com/800x600/?custom,furniture",
    "https://source.unsplash.com/800x600/?furniture,restoration",
    "https://source.unsplash.com/800x600/?interior,woodwork",
    "https://source.unsplash.com/800x600/?wooden,furniture",
    "https://source.unsplash.com/800x600/?cabinet,making",
    "https://source.unsplash.com/800x600/?wood,craft",
    "https://source.unsplash.com/800x600/?carpentry",
    "https://source.unsplash.com/100x100/?certification",
    "https://source.unsplash.com/100x100/?quality,seal"
)

# Fonction pour télécharger et convertir en WebP
function Get-WebPImage {
    param (
        [string]$url,
        [string]$output
    )
    
    $tempFile = "$env:TEMP\temp_image.jpg"
    Invoke-WebRequest -Uri $url -OutFile $tempFile
    
    # Utiliser cwebp pour convertir en WebP (nécessite d'avoir cwebp installé)
    # cwebp $tempFile -o $output
    
    # Pour l'instant, on copie simplement le fichier JPG
    Copy-Item $tempFile $output
    Remove-Item $tempFile
}

# Télécharger les images du restaurant
for ($i = 0; $i -lt $restaurantImages.Count; $i++) {
    $output = Join-Path $imageDir "$($restaurantImages[$i]).webp"
    Get-WebPImage -url $restaurantUrls[$i] -output $output
}

# Télécharger les images de menuiserie
for ($i = 0; $i -lt $menuiserieImages.Count; $i++) {
    $output = Join-Path $imageDir "$($menuiserieImages[$i]).webp"
    Get-WebPImage -url $menuiserieUrls[$i] -output $output
}
