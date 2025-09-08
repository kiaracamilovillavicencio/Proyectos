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
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-t from-primary/10 to-background font-body">
      <main className="flex-1 animate-fade-in-down">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
            
            <div className="flex flex-col items-center gap-6 text-center w-full max-w-2xl">
              <div className="relative group">
                <Avatar className="h-40 w-40 transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src="https://i.ibb.co/Y45CtQbp/foto.jpg" data-ai-hint="profile picture" />
                  <AvatarFallback className="text-5xl">KC</AvatarFallback>
                </Avatar>
                <div className="absolute -inset-1 rounded-full bg-primary blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-2">
                <h1 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                  Kiara Chanel Camilo Villavicencio
                </h1>
              </div>
            </div>

            <div className="mt-12 flex w-full max-w-2xl flex-col gap-8">
              <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                    <User className="h-6 w-6" />
                    Sobre Mí
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">
                    Tengo 17 años, nací el 9 de junio de 2008 en Santo Domingo Este y me caracterizo por mi creatividad, alegría y liderazgo. Actualmente estudio en el área técnica de Informática en el Politécnico Nuestra Señora del Perpetuo Socorro, donde me he destacado por mis excelentes calificaciones. Mi sueño es desarrollarme profesionalmente en el área de Ciberseguridad.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Mis Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {hobbies.map((hobby) => (
                      <li key={hobby.name} className="flex items-center gap-3">
                        {hobby.icon}
                        <span className="font-medium text-foreground/90">{hobby.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex h-16 items-center justify-center border-t bg-transparent">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Kiara's Corner. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
