// Sample course data - In a real application, this would come from a backend
const coursesData = {
    development: [
        {
            id: 1,
            title: "تطوير الويب المتقدم",
            description: "تعلم أحدث تقنيات تطوير الويب مع التركيز على React و Node.js",
            image: "images/web-dev.jpg",
            duration: "12 أسبوع",
            level: "متقدم"
        },
        {
            id: 2,
            title: "تطوير تطبيقات الموبايل",
            description: "تعلم تطوير تطبيقات iOS و Android باستخدام React Native",
            image: "images/mobile-dev.jpg",
            duration: "10 أسبوع",
            level: "متوسط"
        }
    ],
    qualification: [
        {
            id: 3,
            title: "إدارة المشاريع الاحترافية",
            description: "تعلم أساسيات إدارة المشاريع وأدواتها الحديثة",
            image: "images/project-management.jpg",
            duration: "8 أسبوع",
            level: "مبتدئ"
        },
        {
            id: 4,
            title: "التسويق الرقمي",
            description: "استراتيجيات التسويق الرقمي وتحليل البيانات",
            image: "images/digital-marketing.jpg",
            duration: "6 أسبوع",
            level: "متوسط"
        }
    ],
    practical: [
        {
            id: 5,
            title: "تصميم واجهات المستخدم",
            description: "تعلم مبادئ تصميم واجهات المستخدم وتجربة المستخدم",
            image: "images/ui-design.jpg",
            duration: "8 أسبوع",
            level: "متوسط"
        },
        {
            id: 6,
            title: "تحليل البيانات",
            description: "تعلم تحليل البيانات وتصورها باستخدام Python",
            image: "images/data-analysis.jpg",
            duration: "10 أسبوع",
            level: "متقدم"
        }
    ]
};

// Get the course type from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const courseType = urlParams.get('type') || 'development';

// Function to create course cards
function createCourseCard(course) {
    return `
        <div class="course-card" onclick="location.href='course-details.html?id=${course.id}'">
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="course-duration">
                        <i class="far fa-clock"></i>
                        <span>${course.duration}</span>
                    </div>
                    <span class="course-level">${course.level}</span>
                </div>
            </div>
        </div>
    `;
}

// Load courses when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('coursesContainer');
    const courses = coursesData[courseType] || [];
    
    if (courses.length === 0) {
        coursesContainer.innerHTML = '<p class="no-courses">لا توجد دورات متاحة حالياً</p>';
        return;
    }

    coursesContainer.innerHTML = courses.map(course => createCourseCard(course)).join('');
}); 