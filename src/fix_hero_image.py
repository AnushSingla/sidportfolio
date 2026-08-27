import re

# Read the App.jsx file
with open('src/App.jsx', 'r') as f:
    content = f.read()

# Find the hero image reference and update it
old_hero_ref = "hero: { src: '/images/hero-new.png', fit: 'cover', width: '100%', maxWidth: '420px' }"
new_hero_ref = "hero: { src: '/images/siddharth_coffee.png', fit: 'cover', width: '100%', maxWidth: '420px' }"

if old_hero_ref in content:
    content = content.replace(old_hero_ref, new_hero_ref)
    print(f"Replaced hero image reference: {old_hero_ref} -> {new_hero_ref}")
else:
    # Try to find and replace any hero src reference
    import re
    old_pattern = r"hero:\s*\{[^}]*src:\s*['\"](.*?)['\"]"
    match = re.search(old_pattern, content)
    if match:
        old_src = match.group(1)
        content = content.replace(old_src, '/images/siddharth_coffee.png')
        print(f"Replaced hero image: {old_src} -> /images/overcoat.png")
    else:
        print("Could not find hero image reference")
        # Show the relevant part
        start = content.find('hero:')
        if start != -1:
            print(content[start:start+200])

with open('src/App.jsx', 'w') as f:
    f.write(content)

print("Done!")
