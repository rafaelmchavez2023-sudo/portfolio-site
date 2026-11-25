export default function Resume() {
  return (
    <main className="wrap">

      <div className="hero" style={{ paddingBottom: 4 }}>
        <h1 className="page-title" style={{ textTransform: 'uppercase' }}>Resume/CV</h1>
        <p className="dek" style={{ maxWidth: '640px' }}>B.S. Mechanical Engineering, Georgia Institute of Technology<br /><span style={{ fontSize: '15px' }}>Minoring in Applications of Artificial Intelligence and Machine Learning.</span></p>
        <div className="resume-actions" style={{ justifyContent: 'center', marginTop: '54px' }}>
          <a className="btn" href="/assets/Rafael_Chavez_Resume.pdf" download>Download Resume PDF</a>
          <a className="btn" href="/assets/Rafael_Chavez_CV.pdf" download>Download CV PDF</a>
          <a className="btn ghost" href="https://www.linkedin.com/in/rafael-m-chavez" target="_blank" rel="noopener">LinkedIn</a>
          <a className="btn ghost" href="https://orcid.org/0009-0008-0694-9950" target="_blank" rel="noopener">ORCID</a>
        </div>
      </div>

      <section>
        <h2 className="pdf-title">Curriculum Vitae</h2>
        <div className="pdf-embed">
          <iframe src="/assets/Rafael_Chavez_CV.pdf" title="Rafael Chavez CV PDF"></iframe>
        </div>
      </section>

    </main>
  );
}
