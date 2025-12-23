
import os
from PIL import Image

def convert_to_webp(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as im:
                    # Resize if too large (max 1920 width)
                    if im.width > 1920:
                        ratio = 1920 / im.width
                        new_height = int(im.height * ratio)
                        im = im.resize((1920, new_height), Image.Resampling.LANCZOS)
                    
                    # Convert to RGB if RGBA (for jpg) but WebP handles RGBA. 
                    # However, simple conversion is fine.
                    
                    webp_filename = os.path.splitext(filename)[0] + '.webp'
                    webp_path = os.path.join(directory, webp_filename)
                    
                    im.save(webp_path, 'WEBP', quality=80)
                    print(f"Converted {filename} to {webp_filename}")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    convert_to_webp(r'c:\Users\apasi\Desktop\TFG WORKS\Travel\public\images')
