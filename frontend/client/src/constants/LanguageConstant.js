export const LANGUAGE_VERSIONS = {
    c: "C17",
    cpp: "C++20",
    javascript: "18.15.0",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "10.0",
    php: "8.0",
};

export const LANGUAGE_MODES = {
    c: "text/x-csrc",
    cpp: "text/x-c++src",
    javascript: "javascript",
    python: "python",
    java: "text/x-java",
    csharp: "text/x-csharp",
    php: "php",
};

export const CODE_SNIPPETS = {
    c: `
        #include<stdio.h>

        int main() {
            printf("Hello, Alex!\n");
            return 0;
        }
    `,
    cpp: `
        #include<iostream>
        using namespace std;

        int main() {
            cout<<"Hello, Alex!\n"<<endl;
        }
        return 0;
    `,
    javascript: `
        function greet(name) {
            console.log("Hello, " + name + "!");
        }

        greet("Alex");
    `,
    python: `
        def greet(name):
            print("Hello, " + name + "!")

        greet("Alex")
    `,
    java: `
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello World");
            }
        }
    `,
    csharp: `
        using System;
        namespace HelloWorld
        {
            class Hello { 
                static void Main(string[] args) {
                    Console.WriteLine("Hello World in C#");
                }
            }
        }
    `,
    php: `
        <?php
        $name = 'Alex';
        echo $name;
    `,
};
