pipeline{
    agent any

    options {
        timestamps()
        timeout(time: 15,unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        skipDefaultCheckout(true)
    }

    tools {
        nodejs 'Node24'
    }

    environment {
        CI = 'true'
        APP_NAME = 'devops'
    }

    stages {
        stage('Checkout') {
            steps {
                Checkout scm
                echo 'Repository checkout completed'
            }
        }

        stage('Environment') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Validate') {
            steps {
                sh 'npm run check'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run Application') {
            steps {
                sh 'npm start'
            }
        }

        stage('Package') {
            steps {
                sh 'mkdir -p dist'
                sh 'npm pack --pack-destination dist'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts(
                    artifacts: 'dist/*.tgz',
                    fingerprint: true
                )
            }
        }
    }

    post {
        always {
            echo "Pipeline finished: ${currentBuild.currentResult}"
        }

        success {
            echo 'jenkins pipeline completed successfully!'
        }

        failure {
            echo 'jenkins pipeline failed. check the console output.'
        }
    }
}