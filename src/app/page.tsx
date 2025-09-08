import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Bed, Tent, Smartphone, User } from "lucide-react";

export default function Home() {
  const hobbies = [
    { name: "Leer", icon: <BookOpen className="h-5 w-5 text-primary" /> },
    { name: "Ver TikTok", icon: <Smartphone className="h-5 w-5 text-primary" /> },
    { name: "Acampar", icon: <Tent className="h-5 w-5 text-primary" /> },
    { name: "Dormir", icon: <Bed className="h-5 w-5 text-primary" /> },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative w-full max-w-xs mx-auto">
                <Avatar className="h-40 w-40 rounded-full">
                  <AvatarImage src="https://picsum.photos/160/160" data-ai-hint="profile picture" />
                  <AvatarFallback className="text-5xl">KC</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl font-headline">
                  Kiara Chanel Camilo Villavicencio
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Estudiante de Informática y aspirante a experta en Ciberseguridad.
                </p>
              </div>
            </div>
            <div className="mt-10 flex w-full max-w-2xl flex-col gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <User className="h-6 w-6" />
                    Sobre Mí
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    Tengo 17 años, nací el 9 de junio de 2008 en Santo Domingo Este y me caracterizo por mi creatividad, alegría y liderazgo. Actualmente estudio en el área técnica de Informática en el Politécnico Nuestra Señora del Perpetuo Socorro, donde me he destacado por mis excelentes calificaciones. Mi sueño es desarrollarme profesionalmente en el área de Ciberseguridad.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Mis Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {hobbies.map((hobby) => (
                      <li key={hobby.name} className="flex items-center gap-3">
                        {hobby.icon}
                        <span className="font-medium text-foreground">{hobby.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex h-16 items-center justify-center border-t bg-card">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Kiara's Corner. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
