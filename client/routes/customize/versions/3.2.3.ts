import { Binding, BindingDefinition, BuildBindings, Native, NATIVE_ALL, Version } from '../types';

export default (prev: BuildBindings): BuildBindings => ({
  ...prev,
  version: Version.LWJGL323,
  byId: {
    ...prev.byId,
    [Binding.LWJGL]: { ...(prev.byId[Binding.LWJGL] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.ASSIMP]: { ...(prev.byId[Binding.ASSIMP] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.BGFX]: { ...(prev.byId[Binding.BGFX] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.GLFW]: { ...(prev.byId[Binding.GLFW] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.JEMALLOC]: { ...(prev.byId[Binding.JEMALLOC] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.LIBDIVIDE]: { ...(prev.byId[Binding.LIBDIVIDE] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.LLVM]: { ...(prev.byId[Binding.LLVM] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.LMDB]: { ...(prev.byId[Binding.LMDB] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.LZ4]: { ...(prev.byId[Binding.LZ4] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.MEOW]: {
      ...(prev.byId[Binding.MEOW] as BindingDefinition),
      natives: NATIVE_ALL.filter(it => it != Native.LinuxARM32),
    },
    [Binding.NANOVG]: { ...(prev.byId[Binding.NANOVG] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.NUKLEAR]: { ...(prev.byId[Binding.NUKLEAR] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.OPENAL]: { ...(prev.byId[Binding.OPENAL] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.OPENGL]: { ...(prev.byId[Binding.OPENGL] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.OPENGLES]: { ...(prev.byId[Binding.OPENGLES] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.OPUS]: { ...(prev.byId[Binding.OPUS] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.PAR]: { ...(prev.byId[Binding.PAR] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.REMOTERY]: { ...(prev.byId[Binding.REMOTERY] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.RPMALLOC]: { ...(prev.byId[Binding.RPMALLOC] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.SHADERC]: {
      id: Binding.SHADERC,
      title: 'Shaderc',
      description: 'A collection of libraries for shader compilation.',
      natives: NATIVE_ALL,
      website: 'https://github.com/google/shaderc',
    },
    [Binding.STB]: { ...(prev.byId[Binding.STB] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.TINYEXR]: { ...(prev.byId[Binding.TINYEXR] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.TINYFD]: { ...(prev.byId[Binding.TINYFD] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.VMA]: { ...(prev.byId[Binding.VMA] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.XXHASH]: { ...(prev.byId[Binding.XXHASH] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.YOGA]: { ...(prev.byId[Binding.YOGA] as BindingDefinition), natives: NATIVE_ALL },
    [Binding.ZSTD]: { ...(prev.byId[Binding.ZSTD] as BindingDefinition), natives: NATIVE_ALL },
  },
});
