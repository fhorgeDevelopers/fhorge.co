import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCalls } from "../../../providers/Calls";

const Categories = () => {
    const calls = useCalls();

    return (
        <div className="categories">
            <div className="categories__bg"></div>
            <div className="inner">
                <h2>Explore <span className="fix-comma">4000</span>+ Free <span className="hide-on-mobile">Online</span> Courses</h2>
                <ul>
                    {calls.courseCategories.length === 0 ? null : (
                        <>
                            {calls.courseCategories.map((category) => (
                                <li>
                                    <Link to={`/courses/${category.course_category_id}`} title={category.course_category}>
                                        <img src={category.course_category_image} width="34" height="36" title={category.course_category} alt={`${category.course_category} Icon`} />
                                        <h4>{category.course_category}</h4>
                                        <span className="course-amount">
                                            {category.course_count} Courses
                                            <img src="/imgs/homepage/trending_flat.svg" className="d-none d-md-inline" style={{ height: '19px', padding: '0', margin: '1px'}} />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
                <div className="learning-counter" style={{ display: "none" }}><span className="bold users-here"></span> people are learning on Fhorge today </div>
            </div>
        </div>
    );
}

export default Categories;