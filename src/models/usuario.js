import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Fazendo CREATE
export async function createUsuario(dados) {
  return prisma.usuario.create({ data: dados });
}

// READ

export async function listarUsuarios() {
  return prisma.usuario.findMany();
}

export async function buscarUsuarioPorEmail(emailUsuario) {
  return prisma.usuario.findUnique({
    where: {
      emailUsuario: emailUsuario,
    },
  });
}

export async function loginUser(emailUsuario, senhaUsuario) {
  try {
    const user = await buscarUsuarioPorEmail(emailUsuario);

    if (user && user.senhaUsuario === senhaUsuario) {
      return user;
    } else {
      return null; // Credenciais inválidas
    }
  } catch (error) {
    console.error("Erro ao verificar credenciais do usuário", error);
    throw error;
  }
}
