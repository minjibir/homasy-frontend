pipeline {
    stages {
        stage('Testing...') {
            sh 'ng test && ng e2e'
        }

        stage('Packaging...') {
            sh 'ng build --prod --aot --output-hash-none --output-path ./homasy'
        }
    }
}
