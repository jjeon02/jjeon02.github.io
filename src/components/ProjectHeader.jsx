// meta: array of { label: string, value: string | string[] }
function ProjectHeader({ label, title, date, tags, meta, image, imageRatio }) {
  return (
    <header className="project-header-wrapper">
        <div className="project-header">
        <div className="project-header-content">
          <div className="project-header-top">
            {label && <p className="project-header-label">{label}</p>}
            <h1>{title}</h1>
            <caption className="project-header-date">{date}</caption>
            <div className="badge-wrapper">
              {tags.map(tag => (
                <span key={tag} className="badge-size-md badge-primary">{tag}</span>
              ))}
            </div>
          </div>
          {meta && meta.length > 0 && (
            <dl className="project-header-meta">
              {meta.map(({ label: key, value }) => (
                <div key={key} className="project-header-meta-row">
                  <dt>{key}</dt>
                  <dd>
                    {Array.isArray(value)
                      ? value.map(v => <span key={v}>{v}</span>)
                      : value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <img
          src={image}
          alt={title}
          className="project-header-img"
          style={imageRatio ? { aspectRatio: imageRatio } : undefined}
        />
      </div>
    </header>
  );
}

export default ProjectHeader;
