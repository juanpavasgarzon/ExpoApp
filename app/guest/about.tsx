import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});


export default function About() {
    return (
        <ParallaxScrollView headerImage={<Ionicons size={310} name="information-outline" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Acerca de nosotros.</ThemedText>
            </ThemedView>
            <ThemedText type="default">
                Descubre una nueva forma de gestionar tus actividades diarias con nuestra aplicación.
                Diseñada para ofrecerte una experiencia intuitiva y eficiente,
                esta app está aquí para ayudarte a simplificar tus tareas y mantenerte organizado.
            </ThemedText>
            <ThemedText type="subtitle">Características Principales</ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Interfaz Intuitiva: </ThemedText>
                Disfruta de una navegación fácil y accesible con una interfaz diseñada para todos.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Personalización Completa: </ThemedText>
                Ajusta la aplicación según tus preferencias y necesidades personales.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Notificaciones en Tiempo Real: </ThemedText>
                Mantente al día con alertas y recordatorios oportunos.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Sincronización entre Dispositivos: </ThemedText>
                Accede a tu información desde cualquier dispositivo, en cualquier momento.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Soporte Multilenguaje: </ThemedText>
                Utiliza la aplicación en tu idioma preferido con nuestra amplia gama de opciones de idioma.
            </ThemedText>
            <ThemedText type="subtitle">Próximas Actualizaciones</ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Nuevas Funcionalidades: </ThemedText>
                Estamos trabajando en añadir más herramientas para mejorar tu experiencia.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Mejoras de Rendimiento: </ThemedText>
                Continuamente optimizamos la aplicación para ofrecerte un funcionamiento más rápido y eficiente.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Integraciones Ampliadas: </ThemedText>
                Próximamente podrás conectar la aplicación con más servicios y plataformas.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Seguridad Mejorada: </ThemedText>
                Incrementamos nuestras medidas de seguridad para proteger tus datos.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Opciones de Personalización: </ThemedText>
                Nuevas opciones para personalizar aún más tu experiencia dentro de la app.
            </ThemedText>
            <ThemedText type="subtitle">Equipo de Desarrollo</ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Desarrolladores Expertos: </ThemedText>
                Contamos con un equipo altamente calificado que trabaja para ofrecerte la mejor experiencia posible.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Diseñadores Creativos: </ThemedText>
                Nuestros diseñadores se aseguran de que la aplicación no solo sea funcional, sino también agradable a la vista.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Soporte al Cliente: </ThemedText>
                Siempre listos para ayudarte con cualquier problema o pregunta que puedas tener.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Especialistas en Seguridad: </ThemedText>
                Dedicados a mantener tus datos seguros y protegidos.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Gestión de Producto: </ThemedText>
                Constantemente mejorando la aplicación basándonos en tus comentarios y necesidades.
            </ThemedText>
            <ThemedText type="subtitle">Contacta con Nosotros</ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Soporte 24/7: </ThemedText>
                Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Centro de Ayuda: </ThemedText>
                Accede a nuestra base de conocimientos para resolver tus dudas rápidamente.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Feedback de Usuarios: </ThemedText>
                Tu opinión es importante para nosotros. Comparte tus sugerencias y comentarios.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Redes Sociales: </ThemedText>
                Síguenos en nuestras redes sociales para estar al tanto de las últimas actualizaciones y novedades.
            </ThemedText>
            <ThemedText type="default">
                <ThemedText type="defaultSemiBold">Comunidad: </ThemedText>
                Únete a nuestra comunidad y comparte tus experiencias y consejos con otros usuarios.
            </ThemedText>
        </ParallaxScrollView >
    );
}