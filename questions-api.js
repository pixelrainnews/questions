// Simulating a simple API for questions
const questionAPI = {
    getQuestions: (task) => {
        // Simulated API response with static questions
        const questions = {
            "Task 1": [
                {
                    question: "What is the capital of France?",
                    answers: ["Paris", "Berlin", "Madrid", "Rome"],
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    answers: ["Mars", "Venus", "Jupiter", "Mercury"],
                },
                // Add more questions for Task 1
            ],
            "Task 2": [
                {
                    question: "Who wrote 'Romeo and Juliet'?",
                    answers: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
                },
                {
                    question: "What is the largest mammal in the world?",
                    answers: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
                },
                // Add more questions for Task 2
            ],
            "Task 3": [
                {
                    question: "What is the powerhouse of the cell?",
                    answers: ["Mitochondria", "Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"],
                },
                {
                    question: "Who developed the theory of relativity?",
                    answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
                },
                // Add more questions for Task 3
            ],
        };

        return questions[task] || [];
    },
};

// Example usage
const questionsForTask1 = questionAPI.getQuestions("Task 1");
console.log(questionsForTask1);
