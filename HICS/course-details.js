// Sample course data - In a real application, this would come from a backend
const courseDetails = {
    1: {
        title: "تطوير الويب المتقدم",
        description: "تعلم أحدث تقنيات تطوير الويب مع التركيز على React و Node.js. ستتعلم كيفية بناء تطبيقات ويب حديثة وقابلة للتطوير.",
        duration: "12 أسبوع",
        level: "متقدم",
        lessons: [
            {
                id: 1,
                title: "مقدمة في React",
                duration: "45 دقيقة",
                videoUrl: "videos/react-intro.mp4"
            },
            {
                id: 2,
                title: "مكونات React الأساسية",
                duration: "60 دقيقة",
                videoUrl: "videos/react-components.mp4"
            },
            {
                id: 3,
                title: "إدارة الحالة في React",
                duration: "50 دقيقة",
                videoUrl: "videos/react-state.mp4"
            }
        ]
    },
    2: {
        title: "تطوير تطبيقات الموبايل",
        description: "تعلم تطوير تطبيقات iOS و Android باستخدام React Native. اكتشف كيفية بناء تطبيقات موبايل cross-platform.",
        duration: "10 أسبوع",
        level: "متوسط",
        lessons: [
            {
                id: 1,
                title: "مقدمة في React Native",
                duration: "40 دقيقة",
                videoUrl: "videos/react-native-intro.mp4"
            },
            {
                id: 2,
                title: "تصميم واجهات المستخدم",
                duration: "55 دقيقة",
                videoUrl: "videos/react-native-ui.mp4"
            },
            {
                id: 3,
                title: "التعامل مع API",
                duration: "50 دقيقة",
                videoUrl: "videos/react-native-api.mp4"
            }
        ]
    }
};

// Get course ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const courseId = parseInt(urlParams.get('id'));

// Function to create lesson items
function createLessonItem(lesson) {
    return `
        <div class="lesson-item" onclick="playVideo('${lesson.videoUrl}')">
            <div class="lesson-number">${lesson.id}</div>
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-duration">${lesson.duration}</div>
        </div>
    `;
}

// Function to play video
function playVideo(videoUrl) {
    const videoSection = document.getElementById('videoSection');
    const video = document.getElementById('lessonVideo');
    video.src = videoUrl;
    videoSection.style.display = 'flex';
    video.play();
}

// Function to close video
function closeVideo() {
    const videoSection = document.getElementById('videoSection');
    const video = document.getElementById('lessonVideo');
    video.pause();
    videoSection.style.display = 'none';
}

// Load course details when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const course = courseDetails[courseId];
    
    if (!course) {
        document.body.innerHTML = '<div class="error">الدورة غير موجودة</div>';
        return;
    }

    // Update course information
    document.getElementById('courseTitle').textContent = course.title;
    document.getElementById('courseDuration').textContent = course.duration;
    document.getElementById('courseLevel').textContent = course.level;
    document.getElementById('courseDescription').textContent = course.description;

    // Load lessons
    const lessonsList = document.getElementById('lessonsList');
    lessonsList.innerHTML = course.lessons.map(lesson => createLessonItem(lesson)).join('');
}); 