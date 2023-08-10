const Stats = () => {
    return (
        <div className="stats">
            <div className="stats__inner f-center">
                <div className="stats__img f-center d-none">
                    <img width="367" height="24" srcset="/imgs/homepage/stats-trustpilot.png, /imgs/homepage/stats-trustpilot@2x.png 2x" src="/imgs/homepage/stats-trustpilot.png"
                        title="Rate us on Trustpilot" alt="Rating on Trustpilot" />
                </div>
                <ul className="stats__list f-center mt-3">
                    <li>
                        <img src="/imgs/homepage/learners.svg" width="20" height="19" title="30 Learners" alt="Learners" /><span>30 Million +</span> Learners </li>
                    <li>
                        <img src="/imgs/homepage/graduates.svg" width="25" height="23" title="6 Graduates" alt="Graduates" /><span>6 Million +</span> Graduates </li>
                    <li>
                        <img src="/imgs/homepage/countries.svg" width="20" height="23" title="195 Countries" alt="Countries" /><span>195</span> Countries </li>
                </ul>
            </div>
        </div>
    );
}

export default Stats;