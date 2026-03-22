import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './ProjectCard.css'

export function ProjectCard({ title, description, image, imageBrightness, category, links, size = 'medium' }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`project-card project-card--${size}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <motion.div
        className="project-card__bg"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={image} alt={title} style={imageBrightness != null ? { filter: `brightness(${imageBrightness})` } : undefined} />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="project-card__overlay" />

      {/* Animated Gradient on Hover */}
      <motion.div
        className="project-card__hover-gradient"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="project-card__content">
        {/* Category Badge */}
        <span className="project-card__category">{category}</span>

        <div>
          <h3 className="project-card__title" style={{ transform: 'translateZ(30px)' }}>
            {title}
          </h3>

          <motion.p
            className="project-card__description"
            animate={{ opacity: isHovered ? 1 : 0.75 }}
            style={{ transform: 'translateZ(20px)' }}
          >
            {description}
          </motion.p>

          {/* Links */}
          <motion.div
            className="project-card__links"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            style={{ transform: 'translateZ(40px)' }}
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner Accent */}
      <motion.div
        className="project-card__corner"
        animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}
