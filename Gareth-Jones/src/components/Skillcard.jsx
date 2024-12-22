import PropTypes from 'prop-types'

const SkillCard = ({ imgSrc, label, desc, classes = '', altText }) => {
  return (
    <div
      className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-500/50 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ${classes}`}
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
        {/* Use the altText prop if provided, otherwise use label */}
        <img src={imgSrc} alt={altText || label} width={32} height={32} />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  )
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
  altText: PropTypes.string,
}

export default SkillCard
