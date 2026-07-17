from PIL import Image

input_path = 'public/images/logo-final.png'
output_path = 'public/images/logo-final.png'

img = Image.open(input_path).convert('RGBA')

# Trim around the non-transparent content only
bbox = img.getbbox()
if bbox is None:
    raise SystemExit('No visible pixels found')

cropped = img.crop(bbox)
cropped.save(output_path, format='PNG')
print('saved', output_path, 'size', cropped.size)
