from PIL import Image
import os

files_to_convert = [
    'assets/img/favicon.png',
    'assets/img/apple-touch-icon.png'
]

for file_path in files_to_convert:
    if os.path.exists(file_path):
        try:
            # Open the image
            img = Image.open(file_path).convert('RGBA')
            
            # Create a grayscale version but keep the alpha channel
            gray = img.convert('L')
            
            # Create a new RGBA image using the grayscale data for RGB and the original alpha
            result = Image.merge('RGBA', (gray, gray, gray, img.split()[3]))
            
            # Make it brighter to match the brightness(200%) CSS effect
            from PIL import ImageEnhance
            enhancer = ImageEnhance.Brightness(result)
            result = enhancer.enhance(1.5)
            
            # Save it back
            result.save(file_path)
            print(f"Successfully converted {file_path} to grayscale.")
        except Exception as e:
            print(f"Failed to convert {file_path}: {e}")
    else:
        print(f"File not found: {file_path}")
