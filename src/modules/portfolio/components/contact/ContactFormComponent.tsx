import {useEffect, useState} from "react";
import {AnimatePresence, motion, useReducedMotion} from "motion/react";
import {InvisibleFormPhaseComponent} from "@modules/portfolio/components/contact/InvisibleFormPhaseComponent.tsx";
import {DoneFormPhaseComponent} from "@modules/portfolio/components/contact/DoneFormPhaseComponent.tsx";
import type {MotionSentinelProps} from "@/types/MotionlessComponentProp.ts";
import {contact, type QuestionAnswerType, type QuestionPhaseType, quizQuestions} from "@libs/portfolio.const.ts";


function ContactFormStepComponent({sentinel}: MotionSentinelProps) {
    const shouldReduceMotion = useReducedMotion();
    const initialTransition = shouldReduceMotion ? undefined : {opacity: 0, y: 12}
    const terminalTransition = shouldReduceMotion ? undefined : {opacity: 0, y: -12}


    const [isStepVisible, setIsStepVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState<QuestionAnswerType>({});
    const [currentPhase, setCurrentPhase] = useState<QuestionPhaseType>("form");

    const currentQuestion = quizQuestions[currentStep];
    const isLastQuestion = currentStep === quizQuestions.length - 1;

    useEffect(() => {
        const el = sentinel?.current;
        if (!el) return;

        const intersectionObserver = new IntersectionObserver((entries) => {
                for (const e of entries) if (e.isIntersecting) setIsStepVisible(true);
            },
            {threshold: 0.15},
        );

        intersectionObserver.observe(el);
        return () => intersectionObserver.disconnect();
    }, []);

    function setAnswer(val: string) {
        setCurrentAnswer((answers) => ({...answers, [currentQuestion.stepId]: val}));
    }

    function nextAnswer() {
        if (isLastQuestion) {
            setCurrentPhase("summary")

        } else {
            setCurrentStep((s) => s + 1)
        }
    }

    const canAdvance = Boolean(currentAnswer[currentQuestion.stepId]);

    if (isStepVisible) {
        switch (currentPhase) {
            case "form":
                return (
                    <motion.div
                        key={`step-${currentStep}`}
                        initial={initialTransition}
                        animate={{opacity: 1, y: 0}}
                        exit={terminalTransition}
                        transition={{duration: 0.35}}
                    >
                        <p className="text-xs font-mono text-primary">
                            {String(currentStep + 1).padStart(2, "0")} / {String(quizQuestions.length).padStart(2, "0")}
                        </p>
                        <label className="mt-3 block text-lg font-medium text-foreground">
                            {currentQuestion.label}
                        </label>

                        {currentQuestion.type === "choice" ? (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {currentQuestion.options?.map((opt) => {
                                    const selected = currentAnswer[currentQuestion.stepId] === opt;
                                    return (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => setAnswer(opt)}
                                            className="rounded-full px-4 py-2 text-sm transition-colors"
                                            style={{
                                                border: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                                                background: selected
                                                    ? "var(--primary)"
                                                    : "transparent",
                                                color: selected
                                                    ? "var(--primary-foreground)"
                                                    : "var(--foreground)",
                                            }}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                        ) : (
                            <textarea
                                value={currentAnswer[currentQuestion.stepId] ?? ""}
                                onChange={(e) => setAnswer(e.target.value)}
                                placeholder={currentQuestion.placeholder}
                                rows={4}
                                className="mt-6 w-full resize-none rounded-lg bg-transparent p-3 text-sm text-foreground outline-none focus:ring-2"
                                style={{
                                    border: "1px solid color-mix(in oklab, var(--primary) 25%, transparent)",
                                }}
                            />
                        )}

                        <div className="mt-8 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                                disabled={currentStep === 0}
                                className="text-sm text-muted-foreground disabled:opacity-30"
                            >
                                ← Atrás
                            </button>
                            <button
                                type="button"
                                onClick={nextAnswer}
                                disabled={!canAdvance}
                                className="rounded-full px-5 py-2 text-sm font-medium transition-opacity disabled:opacity-40"
                                style={{
                                    background: "var(--primary)",
                                    color: "var(--primary-foreground)",
                                }}
                            >
                                {isLastQuestion ? "Ver resumen" : "Siguiente"}
                            </button>
                        </div>
                    </motion.div>
                );
            case "summary":
                return (
                    <motion.div
                        key="summary"
                        initial={initialTransition}
                        animate={{opacity: 1, y: 0}}
                        exit={terminalTransition}
                    >
                        <p className="text-xs font-mono text-primary">Resumen</p>
                        <h3 className="mt-3 text-lg font-medium text-foreground">
                            Revisá antes de enviar
                        </h3>
                        <dl className="mt-6 space-y-4 text-sm">
                            {quizQuestions.map((q) => (
                                <div key={q.stepId}>
                                    <dt className="text-muted-foreground">{q.label}</dt>
                                    <dd className="mt-1 text-foreground">
                                        {currentAnswer[q.stepId] || <span className="text-muted-foreground/60">—</span>}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => setCurrentPhase("form")}
                                className="text-sm text-muted-foreground hover:text-foreground"
                            >
                                ← Editar
                            </button>
                            <button
                                type="button"
                                onClick={() => setCurrentPhase("done")}
                                className="rounded-full px-5 py-2 text-sm font-medium"
                                style={{
                                    background: "var(--primary)",
                                    color: "var(--primary-foreground)",
                                }}
                            >
                                Confirmar y finalizar
                            </button>
                        </div>
                    </motion.div>
                );
            case "done":
                return (
                    <DoneFormPhaseComponent
                        initialTransition={shouldReduceMotion ? {opacity: 0, scale: 0.98} : undefined}
                        terminalTransition={shouldReduceMotion ? {opacity: 0, scale: -0.98} : undefined}
                    />
                );
        }
    } else {
        return (
            <InvisibleFormPhaseComponent/>
        );
    }
}

export function ContactFormComponent(props: MotionSentinelProps) {
    return (
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                    Contacto
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    ¿Trabajamos juntos?
                </h2>
                <p className="mt-4 max-w-sm text-base text-muted-foreground">
                    Respondé unas preguntas rápidas y te contacto por email en menos
                    de 48 h.
                </p>
                <div className="mt-8 space-y-1 text-sm">
                    <a
                        href={`mailto:${contact.professionalContact}`}
                        className="text-muted-foreground transition-colors hover:text-foreground underline decoration-1 underline-offset-2"
                    >{contact.professionalContact}</a>
                </div>
            </div>

            <div
                className="min-h-80 rounded-2xl p-6 md:p-8"
                style={{
                    border: "1px solid color-mix(in oklab, var(--primary) 18%, transparent)",
                    background: "color-mix(in oklab, var(--primary) 4%, var(--background))",
                }}
            >
                <AnimatePresence mode="wait">
                    <ContactFormStepComponent sentinel={props.sentinel}/>
                </AnimatePresence>
            </div>
        </div>
    )
}