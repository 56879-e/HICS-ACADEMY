// Course data with their Google Form links
const courses = [
    {
        id: 'web-dev',
        title: 'التأهيل لسوق العمل   ',
        description: 'الاستعداد لمواجهة الصعوبات المتعلقة بسوق العمل',
        formLink: '' // Add your Google Form link here
    },
    {
        id: 'mobile-dev',
        title: 'تطوير تطبيقات الموبايل',
        description: 'تعلم تطوير تطبيقات الموبايل لنظامي Android و iOS',
        formLink: '' // Add your Google Form link here
    },
    {
        id: 'project-management',
        title: 'إدارة المشاريع الاحترافية',
        description: 'تعلم أساسيات وأدوات إدارة المشاريع بكفاءة عالية',
        formLink: '' // Add your Google Form link here
    },
    {
        id: 'digital-marketing',
        title: 'التسويق الرقمي',
        description: 'تعلم استراتيجيات التسويق الرقمي وتحسين محركات البحث',
        formLink: '' // Add your Google Form link here
    },
    {
        id: 'ui-design',
        title: 'تصميم واجهات المستخدم',
        description: 'تعلم تصميم واجهات المستخدم الجذابة وسهلة الاستخدام',
        formLink: '' // Add your Google Form link here
    },
    {
        id: 'data-analysis',
        title: 'تحليل البيانات',
        description: 'تعلم تحليل البيانات واستخراج الرؤى المفيدة',
        formLink: '' // Add your Google Form link here
    }
];

// Function to create course cards
function createCourseCards() {
    const coursesGrid = document.getElementById('coursesGrid');
    
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="card-buttons">
                <a href="${course.formLink}" class="enroll-btn" target="_blank">سجل الآن</a>
            </div>
        `;
        
        coursesGrid.appendChild(card);
    });
}

// Function to handle course booking
function bookCourse(courseId) {
    // You can implement the booking logic here
    alert(`تم طلب حجز الدورة: ${courseId}`);
    // You can redirect to a booking form or show a modal here
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createCourseCards();
}); 