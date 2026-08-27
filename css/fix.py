import re
with open('css/style.css', 'r') as f:
    content = f.read()

old = """.hero-glow {
  position: absolute;
  bottom: 0; right: 0;
  width: 80%; height: 60%;
  background: radial-gradient(ellipse at bottom right, rgba(0,200,150,0.12) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.hero-img {
  position: relative;
  width: 100%;
  max-width: 560px;
  object-fit: contain;
  z-index: 2;
  animation: float 7s ease-in-out infinite;
  filter: drop-shadow(0 40px 80px rgba(0,0,0,0.6));
}"""

replacement = """/* Hero glow and animation removed for cleaner design */"""

content = content.replace(old, replacement)

# Also remove the float keyframe animation
keyframe_old = """@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50%        {
    transform: translateY(-14px);
  }
}"""
keyframe_new = "/* float animation removed */"
if keyframe_old in content:
    content = content.replace(keyframe_old, keyframe_new)

with open('css/style.css', 'w') as f:
    f.write(content)

print("DONE: CSS updated successfully")
